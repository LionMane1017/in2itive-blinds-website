import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Lead capture for PDF downloads
  leads: router({
    capture: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        pdfType: z.enum(['study', 'elaborated_study']),
      }))
      .mutation(async ({ input }) => {
        const { getDb } = await import('./db');
        const { leads } = await import('../drizzle/schema');
        
        const db = await getDb();
        if (!db) {
          throw new Error('Database not available');
        }
        
        // Insert lead into database
        await db.insert(leads).values({
          name: input.name,
          email: input.email,
          pdfType: input.pdfType,
        });
        
        return { success: true };
      }),
  }),
  
  // Voice Assistant API Key and Knowledge Base
  voiceAssistant: router({
    getApiKey: publicProcedure
      .query(() => {
        // Use OpenAI API key from environment
        const apiKey = process.env.OPENAI_API_KEY;
        console.log('[Backend] Checking for OpenAI API key...');
        console.log('[Backend] OPENAI_API_KEY exists:', !!process.env.OPENAI_API_KEY);
        if (!apiKey) {
          console.error('[Backend] No OpenAI API key found in environment variables');
          throw new Error('OpenAI API key not configured on server');
        }
        console.log('[Backend] OpenAI API key found, returning to client');
        return { apiKey };
      }),
    
    getKnowledgeBase: publicProcedure
      .query(async () => {
        // Load knowledge base from JSON file
        const fs = await import('fs/promises');
        const path = await import('path');
        
        try {
          const kbPath = path.join(process.cwd(), 'server', 'knowledge-base.json');
          const kbContent = await fs.readFile(kbPath, 'utf-8');
          const knowledgeBase = JSON.parse(kbContent);
          
          console.log('[Backend] Knowledge base loaded successfully');
          return { knowledgeBase };
        } catch (error) {
          console.error('[Backend] Failed to load knowledge base:', error);
          throw new Error('Knowledge base not available');
        }
      }),
  }),
  
  contact: router({
    sendEmail: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        company: z.string().optional(),
        message: z.string().min(10),
      }))
      .mutation(async ({ input }) => {
        // Send email using nodemailer
        const nodemailer = await import('nodemailer');
        
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER || 'noreply@mywisemedia.com',
            pass: process.env.SMTP_PASS || '',
          },
        });

        const emailContent = `
New Contact Form Submission

Name: ${input.name}
Email: ${input.email}
Company: ${input.company || 'Not provided'}

Message:
${input.message}
        `;

        try {
          await transporter.sendMail({
            from: '"Wise Cluster Website" <noreply@mywisemedia.com>',
            to: 'forms@mywisemedia.com',
            subject: `New Contact Form Submission from ${input.name}`,
            text: emailContent,
          });

          return { success: true };
        } catch (error) {
          console.error('Email send error:', error);
          throw new Error('Failed to send email. Please try again later.');
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;

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
  
  // Voice Assistant API Key
  voiceAssistant: router({
    getApiKey: publicProcedure
      .query(() => {
        // Try both VITE_ prefixed and non-prefixed versions
        const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.VITE_GOOGLE_AI_API_KEY;
        console.log('[Backend] Checking for API key...');
        console.log('[Backend] GOOGLE_AI_API_KEY exists:', !!process.env.GOOGLE_AI_API_KEY);
        console.log('[Backend] VITE_GOOGLE_AI_API_KEY exists:', !!process.env.VITE_GOOGLE_AI_API_KEY);
        if (!apiKey) {
          console.error('[Backend] No API key found in environment variables');
          throw new Error('Google AI API key not configured on server');
        }
        console.log('[Backend] API key found, returning to client');
        return { apiKey };
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

# WiseWare Consulting - Deployment Instructions

## Project Overview

This is a full-stack React + TypeScript + Vite application with:
- **Frontend:** React 19, Tailwind CSS 4, shadcn/ui components
- **Backend:** Express 4, tRPC 11, Node.js
- **Database:** MySQL/TiDB (Drizzle ORM)
- **Authentication:** Manus OAuth (pre-configured)
- **Features:** Blog, case studies, interactive tools, AI voice assistant, live chat

---

## Prerequisites

- **Node.js:** v22.13.0 or higher
- **pnpm:** v9.x or higher (recommended) or npm
- **MySQL Database:** MySQL 8.0+ or TiDB compatible database

---

## Environment Variables

The project requires environment variables for database, authentication, and API keys. These are already configured in the Manus platform. For external deployment, you'll need to set up these variables in your hosting environment.

**Required Variables:**
- Database connection string
- JWT secret for session management
- OAuth configuration (if using Manus auth)
- API keys for external services

**Note:** The AI Voice Assistant currently uses a hardcoded Google AI API key in `client/src/components/WiseWareAssistant.tsx` (line with `const API_KEY`). For production security, move this to a backend endpoint.

---

## Installation

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Database Setup

Push the database schema to your MySQL database:

```bash
pnpm db:push
```

This creates tables for users, leads, and contact submissions.

---

## Development

Start the development server:

```bash
pnpm dev
```

Application runs at `http://localhost:3000`

---

## Production Build

### 1. Build the Application

```bash
pnpm build
```

Creates:
- `dist/client/` - Static frontend assets
- `dist/server/` - Compiled backend server

### 2. Start Production Server

```bash
NODE_ENV=production node dist/server/index.js
```

---

## Deployment Options

### Option 1: Traditional VPS/Server

1. Upload files to server (exclude node_modules, .git)
2. Install dependencies: `pnpm install --prod`
3. Build: `pnpm build`
4. Set up process manager (PM2):
   ```bash
   npm install -g pm2
   pm2 start dist/server/index.js --name wiseware
   pm2 save
   pm2 startup
   ```
5. Configure reverse proxy (Nginx):
   ```nginx
   server {
       listen 80;
       server_name wisewareconsulting.com;
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
6. Set up SSL: `sudo certbot --nginx -d wisewareconsulting.com`

### Option 2: Docker Deployment

Create Dockerfile:
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --prod
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["node", "dist/server/index.js"]
```

Build and run:
```bash
docker build -t wiseware-consulting .
docker run -p 3000:3000 wiseware-consulting
```

### Option 3: Manus Platform (Current)

Your site is already deployed on Manus:
1. Save a checkpoint in the UI
2. Click "Publish" button
3. Live at your custom domain

---

## Post-Deployment Checklist

- [ ] Verify database connection
- [ ] Test OAuth login
- [ ] Test all forms (contact, newsletter, lead capture)
- [ ] Check AI Voice Assistant
- [ ] Test live chat widget
- [ ] Verify PDF downloads
- [ ] Test mobile responsive design
- [ ] Run Lighthouse audit
- [ ] Set up SSL (HTTPS)
- [ ] Configure DNS
- [ ] Set up monitoring
- [ ] Configure database backups
- [ ] Test all navigation
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to Google

---

## Important Files

**Configuration:**
- `package.json` - Dependencies
- `vite.config.ts` - Build config
- `tailwind.config.ts` - Styling
- `drizzle.config.ts` - Database

**Frontend:**
- `client/src/App.tsx` - Routing
- `client/src/pages/` - Pages
- `client/src/components/` - Components
- `client/public/` - Static assets

**Backend:**
- `server/routers.ts` - API routes
- `server/db.ts` - Database queries
- `drizzle/schema.ts` - Schema

**Documentation:**
- `DESIGN_SYSTEM.md` - Style guide
- `COMPONENT_LIBRARY.md` - Components

---

## Troubleshooting

**Build Errors:**
```bash
pnpm run typecheck
```

**Database Issues:**
- Check connection string
- Verify database is running
- Check user permissions

**Performance:**
- Enable gzip in Nginx
- Optimize images (WebP)
- Use CDN for assets

---

## Maintenance

**Database Backups:**
```bash
mysqldump -u user -p database > backup.sql
mysql -u user -p database < backup.sql
```

**Updates:**
```bash
pnpm outdated
pnpm update
```

**Monitoring:**
```bash
pm2 monit
pm2 logs wiseware
```

---

## Security

1. Never commit secrets to version control
2. Move API keys to backend
3. Use strong database passwords
4. Always use HTTPS
5. Implement rate limiting
6. Validate all inputs

---

**Version:** 1.0  
**Node:** 22.13.0  
**Database:** MySQL 8.0+

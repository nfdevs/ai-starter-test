# AI Personal Coach — Landing Page

A conversion-focused landing page for an AI-powered personal coaching application. Built with Next.js 16, React 19, and Tailwind CSS v4.

## 🌐 Live Site

**View the live site:** [https://github.com/nfdevs/ai-starter-test](https://github.com/nfdevs/ai-starter-test)

> **Note:** Update your GitHub repository description to: "A conversion-focused landing page for an AI-powered personal coaching application. Live: https://github.com/nfdevs/ai-starter-test"

## 🎯 Project Overview

This landing page is designed to convert visitors into waitlist signups for an AI personal coach that helps users turn clarity into consistent action. The design emphasizes calm, trust, and clarity—avoiding overwhelming AI aesthetics in favor of a human-centered coaching experience.

## ✨ Features

- **Hero Section** - Clear value proposition with primary and secondary CTAs
- **Problem → Insight** - Two-column layout highlighting pain points and solutions
- **How It Works** - Three-step daily coaching loop (Check-in, Reflect, Nudge)
- **What Makes It Different** - Comparison grid showing coach vs typical AI tools
- **Product Preview** - Interactive chat-style examples of the coaching experience
- **Social Proof** - Early user signals and testimonials
- **Pricing Tease** - Simple, transparent pricing message
- **Final CTA** - Prominent waitlist signup section
- **Minimal Footer** - Clean navigation and legal links

## 🎨 Design System

- **Colors**: Calm, muted palette with off-white background (#fafafa) and soft blue accent (#4a90e2)
- **Typography**: Inter font for clean, readable text with generous line-height
- **Layout**: Mobile-first, responsive design with ample whitespace
- **Motion**: Subtle hover effects and transitions
- **Tone**: Human, calm, and trustworthy—not "AI overload"

## 🚀 Getting Started

First, install dependencies:

```bash
bun install
# or
npm install
```

Then, run the development server:

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the landing page.

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Inter Font** - Clean, modern typography via Google Fonts

## 📁 Project Structure

```
app/
  ├── layout.tsx      # Root layout with metadata and font configuration
  ├── page.tsx        # Main landing page component
  └── globals.css     # Global styles and design system variables
```

## 🎯 Key Sections

1. **Hero** - Above-the-fold conversion focus
2. **Problem/Insight** - Addresses visitor pain points
3. **How It Works** - Explains the 3-step coaching loop
4. **Differentiation** - Highlights unique value proposition
5. **Product Preview** - Shows what the experience feels like
6. **Social Proof** - Builds trust with early signals
7. **Pricing** - Transparent pricing message
8. **Final CTA** - Last conversion opportunity
9. **Footer** - Minimal navigation and legal links

## 📝 Next Steps

To make this production-ready:

1. ~~**Connect Waitlist Form**~~ ✅ - Waitlist signup functionality implemented (see [WAITLIST_STORAGE.md](./WAITLIST_STORAGE.md))
2. ~~**Add Analytics**~~ ✅ - Analytics tracking implemented (see [ANALYTICS.md](./ANALYTICS.md))
3. **SEO Optimization** - Add Open Graph tags, structured data, and optimize meta descriptions
4. **Performance** - Optimize images, implement lazy loading, and ensure <1.5s load time
5. **A/B Testing** - Test different headlines, CTAs, and layouts
6. ~~**Accessibility**~~ ✅ - Accessibility improvements implemented (see [ACCESSIBILITY.md](./ACCESSIBILITY.md))

## 🚢 Building & Deployment

### Local Build

To build the project locally and test the production build:

```bash
# Install dependencies
bun install
# or
npm install

# Build for production
bun run build
# or
npm run build

# Start production server
bun start
# or
npm start
```

The production build will be in the `.next` directory. The server will run on `http://localhost:3000` by default.

### Build Requirements

- **Node.js**: 18.x or higher (20.x recommended)
- **Package Manager**: Bun (recommended) or npm
- **Build Output**: Static and server-rendered pages in `.next` directory

### Deployment Options

#### Vercel (Recommended)

Vercel is the recommended platform for Next.js applications:

1. **Connect Repository**:
   - Push your code to GitHub
   - Import project in [Vercel Dashboard](https://vercel.com/new)
   - Vercel will auto-detect Next.js settings

2. **Build Settings** (auto-configured):
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `bun install` or `npm install`

3. **Environment Variables** (if needed):
   - Add in Vercel Dashboard → Settings → Environment Variables

4. **Deploy**:
   - Every push to `main` branch triggers automatic deployment
   - Preview deployments created for pull requests

**Vercel CLI** (alternative):
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Netlify

1. **Connect Repository**:
   - Push to GitHub
   - Import in [Netlify Dashboard](https://app.netlify.com)

2. **Build Settings**:
   - Build command: `npm run build` or `bun run build`
   - Publish directory: `.next`
   - Framework preset: Next.js

3. **Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### Self-Hosted (Docker)

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json bun.lock* ./
RUN npm install || bun install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build || bun run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t ai-coach-starter .
docker run -p 3000:3000 ai-coach-starter
```

### CI/CD Setup

#### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
      
      - name: Install dependencies
        run: bun install
      
      - name: Run linter
        run: bun run lint
      
      - name: Build project
        run: bun run build
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build
          path: .next
          retention-days: 1
```

#### GitLab CI

Create `.gitlab-ci.yml`:

```yaml
image: node:20

stages:
  - build
  - deploy

build:
  stage: build
  script:
    - npm install
    - npm run lint
    - npm run build
  artifacts:
    paths:
      - .next/
    expire_in: 1 hour

deploy:
  stage: deploy
  script:
    - echo "Deploy to your hosting platform"
  only:
    - main
```

### Reproducing the Live Build

To reproduce the exact build that's deployed:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nfdevs/ai-starter-test.git
   cd ai-starter-test
   ```

2. **Install dependencies**:
   ```bash
   bun install
   # or
   npm install
   ```

3. **Build for production**:
   ```bash
   bun run build
   # or
   npm run build
   ```

4. **Start production server**:
   ```bash
   bun start
   # or
   npm start
   ```

5. **Verify build**:
   - Open `http://localhost:3000`
   - Check that all features work (waitlist form, analytics, etc.)
   - Verify build output in `.next` directory

### Environment Variables

Currently, no environment variables are required. If you need to add them:

1. Create `.env.local` for local development:
   ```bash
   # .env.local
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

2. Add to deployment platform (Vercel/Netlify):
   - Set in platform dashboard
   - Never commit `.env.local` to git

### Build Output

The build process creates:
- `.next/` - Compiled Next.js application
- `.next/static/` - Static assets (CSS, JS, images)
- `.next/server/` - Server-side code

### Troubleshooting

**Build fails:**
- Ensure Node.js 18+ is installed
- Clear `.next` directory: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && bun install`

**Port already in use:**
- Change port: `PORT=3001 bun start`
- Or kill process using port 3000

**Type errors:**
- Run type check: `npx tsc --noEmit`
- Ensure all dependencies are installed

### Performance Optimization

Before deploying, ensure:
- ✅ Build completes without errors
- ✅ No console errors in production build
- ✅ Lighthouse score > 90 for performance
- ✅ All images optimized (if added)
- ✅ Fonts loading correctly

## 🎨 Design Principles

- **Calm over chaos** - No overwhelming dashboards or graphs
- **Clarity over complexity** - Short, human language
- **Trust over hype** - Authentic, not salesy
- **Mobile-first** - Optimized for all screen sizes
- **Fast loading** - Performance is a feature

## 📊 Success Metrics

Track these key metrics:
- Hero CTA click-through rate
- Waitlist conversion rate
- Time on page
- Scroll depth to "How it works" section

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a starter template. Customize it for your specific needs and brand.

---

Built with care for a calmer way to move forward.

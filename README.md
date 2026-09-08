# 🎓 RBS Classes - Complete Education Ecosystem

**Learn. Practice. Grow.**

## Overview

RBS Classes is a modern, scalable education platform that brings together students, teachers, and coaching institutes in a unified learning ecosystem.

### Core Features

✅ **Live & Recorded Classes** - Interactive learning with video lectures  
✅ **Comprehensive Tests** - MCQs, essays, and full-length tests  
✅ **Study Materials** - Notes, PDFs, and resources  
✅ **AI Tutor** - Personal AI doubt solver  
✅ **Analytics** - Detailed performance tracking  
✅ **Certificates** - Industry-recognized credentials  
✅ **Community** - Forums and peer interaction  
✅ **Institute Management** - Complete SaaS for coaching centres  

## Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage + Real-time)
- **AI**: OpenAI API (GPT-4 + Embeddings)
- **Hosting**: Vercel (Frontend) + Supabase (Backend)
- **Version Control**: GitHub

## Project Structure

```
RBS-Classes/
├── frontend/              # Next.js application
│   ├── app/              # App router pages
│   ├── components/       # React components
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilities
│   ├── types/            # TypeScript types
│   └── styles/           # Global styles
│
├── backend/              # Backend configuration
│   ├── supabase/         # Database migrations & functions
│   ├── auth/             # Authentication setup
│   ├── database/         # Schema & RLS policies
│   └── storage/          # Storage bucket config
│
├── docs/                 # Documentation
│   ├── MASTER_BLUEPRINT.md
│   ├── PRD.md
│   ├── TRD.md
│   ├── API_DOCUMENTATION.md
│   └── ...
│
└── scripts/              # Automation scripts
```

## Quick Start

### Prerequisites
- Node.js 18+
- Git
- Supabase account
- OpenAI API key

### Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/m30827243-netizen/RBS-classes-.git
   cd RBS-classes-
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Setup Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_key
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

## Database Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run migrations in Supabase SQL editor:
   ```sql
   -- Copy contents of backend/supabase/migrations/001_init_core.sql
   -- Then copy contents of backend/supabase/migrations/002_rls_policies.sql
   ```
3. Setup storage buckets for files and videos

## Authentication

Supabase handles authentication with support for:
- Email + Password
- Google OAuth
- GitHub OAuth
- Magic Links
- OTP

## Deployment

### Frontend (Vercel)

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Vercel automatically deploys on push

### Backend (Supabase)

- Supabase is managed cloud service
- Backups and updates handled automatically
- Monitor in Supabase Dashboard

## Documentation

Complete documentation available in `/docs`:
- `MASTER_BLUEPRINT.md` - Complete vision and features
- `PRD.md` - Product requirements
- `TRD.md` - Technical requirements
- `API_DOCUMENTATION.md` - API endpoints
- `DATABASE_SCHEMA.md` - Database design
- `DEPLOYMENT_GUIDE.md` - Deployment steps
- `SECURITY_CHECKLIST.md` - Security guidelines

## Development Workflow

### Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Commit Changes
```bash
git add .
git commit -m "feat: add feature description"
```

### Push and Create PR
```bash
git push origin feature/your-feature-name
```

## API Usage

### Example: Fetch Courses
```typescript
import { supabase } from '@/lib/supabase'

const { data: courses } = await supabase
  .from('courses')
  .select('*')
  .eq('is_published', true)
```

### Example: Create Test Attempt
```typescript
const { data: attempt } = await supabase
  .from('attempts')
  .insert({
    student_id: userId,
    test_id: testId,
    started_at: new Date()
  })
```

## Security

- ✅ Row-level security (RLS) enabled on all tables
- ✅ Environment variables for sensitive data
- ✅ HTTPS everywhere
- ✅ API rate limiting
- ✅ Input validation
- ✅ CORS configured
- ✅ Secure authentication

## Performance

- ✅ Next.js image optimization
- ✅ Code splitting & lazy loading
- ✅ Database query optimization
- ✅ CDN for static assets
- ✅ Caching strategies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests
5. Submit a pull request

See `CONTRIBUTING.md` for detailed guidelines.

## License

MIT License - see LICENSE file for details

## Support

- 📧 Email: support@rbsclasses.com
- 💬 WhatsApp: +91 8873880542
- 🌐 Website: www.rbsclasses.com

## Team

- **Vision**: Complete Education Ecosystem
- **Mission**: Making quality education accessible to all
- **Values**: Excellence, Innovation, Inclusivity

---

**Status**: 🟢 Active Development  
**Last Updated**: September 2026  
**Maintained by**: RBS Classes Team

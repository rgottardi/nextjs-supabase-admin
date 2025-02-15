# NextJS Supabase Admin Portal

A modern admin portal built with Next.js 14 and Supabase, featuring:

- 🔐 Authentication with Supabase Auth
- 👥 User Management
- 🛡️ Role-based Access Control
- 🎨 Modern UI with shadcn/ui
- 🎯 TypeScript for type safety
- 📱 Responsive Design

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a Supabase project and add the environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Copy `.env.local.example` to `.env.local` and add your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Features

- Admin-only registration (no self-registration)
- Protected routes with middleware
- Role-based access control (admin vs user)
- User management dashboard
- Modern tech stack with Next.js 14
- Type-safe database operations

## License

MIT
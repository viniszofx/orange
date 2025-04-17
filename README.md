![alt text](/public/image.png)

# Orange - Modern Authentication System

A modern authentication system built with Next.js 14, Supabase, and TypeScript.

## Features

- 🔐 Secure authentication with Supabase Auth
- 📧 Email/Password authentication
- 🌐 Social login (Google)
- ✨ Modern UI with Tailwind CSS
- 🔄 Server actions for form handling
- 🛡️ Protected routes with middleware
- 📱 Responsive design
- 🎯 Type-safe with TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- Supabase account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/orange.git
cd orange
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_URL=http://localhost:3000
```

4. Start the development server:

```bash
npm run dev
```

## Project Structure

```
orange/
├── app/
│   ├── (auth)/           # Authentication routes
│   ├── dashboard/        # Protected dashboard routes
│   └── layout.tsx        # Root layout
├── components/          # Reusable components
├── utils/
│   └── supabase/        # Supabase client utilities
└── middleware.ts        # Authentication middleware
```

## Authentication Flow

1. Users can sign up with email/password
2. Email verification required
3. Social login options available
4. Protected routes require authentication
5. Automatic redirection for authenticated/unauthenticated users

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

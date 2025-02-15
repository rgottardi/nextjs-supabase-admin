import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { LoginForm } from '@/components/auth/LoginForm'

export default async function LoginPage() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Admin Portal</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
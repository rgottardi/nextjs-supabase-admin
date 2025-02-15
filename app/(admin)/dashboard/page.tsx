import { createClient } from '@/lib/supabase/server'
import { UserTable } from '@/components/admin/UserTable'

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: profiles } = await supabase
    .from('profiles')
    .select('*')
    .order('updated_at', { ascending: false })

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">User Management</h1>
      <UserTable initialData={profiles || []} />
    </div>
  )
}
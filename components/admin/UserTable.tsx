'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { UserForm } from './UserForm'
import { Database } from '@/lib/types/database'

type Profile = Database['public']['Tables']['profiles']['Row']

interface UserTableProps {
  initialData: Profile[]
}

export function UserTable({ initialData }: UserTableProps) {
  const [users, setUsers] = useState(initialData)
  const [showForm, setShowForm] = useState(false)
  const [selectedUser, setSelectedUser] = useState<Profile | null>(null)

  const handleEdit = (user: Profile) => {
    setSelectedUser(user)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return

    const supabase = createClient()
    const { error } = await supabase
      .from('profiles')
      .delete()
      .eq('id', id)

    if (!error) {
      setUsers(users.filter(user => user.id !== id))
    }
  }

  return (
    <div>
      <Button onClick={() => setShowForm(true)} className="mb-4">
        Add New User
      </Button>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.full_name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{new Date(user.updated_at).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(user)}
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {showForm && (
        <UserForm
          user={selectedUser}
          onClose={() => {
            setShowForm(false)
            setSelectedUser(null)
          }}
          onSuccess={(updatedUser) => {
            if (selectedUser) {
              setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u))
            } else {
              setUsers([...users, updatedUser])
            }
            setShowForm(false)
            setSelectedUser(null)
          }}
        />
      )}
    </div>
  )
}
// app/component/LogoutButton.tsx
'use client'
import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg"
    >
      Logout
    </button>
  )
}
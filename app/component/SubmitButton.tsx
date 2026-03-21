// app/component/SubmitButton.tsx
'use client'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()  // ← true while form is submitting

  return (
    <button
      type="submit"
      disabled={pending}  // ← disable while submitting
      className="rounded-lg px-5 py-2.5 font-extrabold bg-indigo-950 border-4 border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Loading...' : label}  
    </button>
  )
}
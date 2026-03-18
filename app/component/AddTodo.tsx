'use client'

import { addTodo } from "@/actions/todo"
import { useActionState } from "react"

export default function AddTodo(){
    const [state,formAction] = useActionState(addTodo,null)
    return (
        <>
        <div className="todo__container">
            <form action={formAction}>
                {state?.error && (
        <p className="text-red-500 font-bold text-center p-2 bg-red-100 rounded-lg mx-2">
          {state.error}
        </p>
      )}
                <input name='todo' className="w-125 h-10 border-2 bg-fuchsia-900 rounded-lg p-3 text-lg font-bold" type="text" placeholder="Add todo" /> <button type="submit" className="rounded-lg px-5 py-2.5 font-extrabold text-3xl bg-indigo-950 border-4 border-emerald-500"> ADD</button>
            </form>
        </div>
        </>
    )
}
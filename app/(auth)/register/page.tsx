'use client'

import { addNewUser } from "@/actions/todo"
import { useActionState } from "react"

export default function LoginPage(){
    const [state,formAction] = useActionState(addNewUser,null)
    return (
        <form action={formAction} className="w-full bg-amber-100 rounded-2xl border-slate-500 border-2">
            <h1 className="text-center text-slate-800 font-extrabold text-3xl">Register</h1>
            {state?.error && (
        <p className="text-red-500 font-bold text-center p-2 bg-red-100 rounded-lg mx-2">
          {state.error}
        </p>
      )}
            <div className="p-2">
                <label htmlFor="name" className="text-slate-800 font-bold text-lg">Name</label>
                <input type="text" name="name" className="w-full bg-slate-800 font-bold text-pink-500 rounded-sm h-10 p-1"/>
            </div>
            <div className="p-2">
                <label htmlFor="email" className="text-slate-800 font-bold text-lg">Email</label>
                <input type="email" name="email" className="w-full bg-slate-800 font-bold text-pink-500 rounded-sm h-10 p-1"/>
            </div>
            <div className="p-2">
                <label htmlFor="password" className="text-slate-800 font-bold text-lg">Password</label>
                <input type="password" name="password" className="w-full bg-slate-800 font-semibold text-pink-500 rounded-sm h-10" />
            </div>
            <div className="button__container p-2 flex justify-between gap-1">
                <button className=" bg-slate-800 text-slate-200 font-extrabold text-lg rounded-lg h-10 w-[50%] border-2 border-amber-800 shadow-gray-500 hover:shadow-xs" type="reset">
                Reset
            </button>
                <button className=" bg-slate-800 text-slate-200 font-extrabold text-lg rounded-lg h-10 w-[50%] border-2 border-amber-800 shadow-gray-500 hover:shadow-xs" type="submit">
                Register
            </button>
            </div>
        </form>
    )
}
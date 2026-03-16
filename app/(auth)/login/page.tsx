'use client'
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage(){ 
    const router = useRouter()

    const handleLogin = async(formData:FormData)=>{
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const result = await signIn('credentials',{
            email,
            password,
            redirect:false,
        })
        if(result?.error){
            console.log('Login Failed')
            return
        }
        router.push('/')
    }


    return (
        <form action={handleLogin} className="w-full bg-cyan-100 rounded-2xl h-full border-slate-500 border-2">
            <h1 className="text-center text-slate-800 font-extrabold text-3xl">Login</h1>
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

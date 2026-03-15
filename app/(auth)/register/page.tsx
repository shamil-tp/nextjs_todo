'use client'
export default function LoginPage(){
    return (
        <form action="" className="w-full bg-amber-100 rounded-2xl h-full border-slate-500 border-2">
            <h1 className="text-center text-slate-800 font-extrabold text-3xl">Register</h1>
            <div className="p-2">
                <label htmlFor="email" className="text-slate-800 font-bold text-lg">Email</label>
                <input type="email" name="email" className="w-full bg-slate-800 font-bold text-pink-500 rounded-sm h-10 p-1"/>
            </div>
            <div className="p-2">
                <label htmlFor="password" className="text-slate-800 font-bold text-lg">Password</label>
                <input type="password" name="password" className="w-full bg-slate-800 font-semibold text-pink-500 rounded-sm h-10" />
            </div>
            
        </form>
    )
}
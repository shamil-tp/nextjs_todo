'use client'
export default function LoginPage(){
    return (
        <form action="" className="w-full bg-cyan-100">
            <h1 className="text-center text-slate-800">Login</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div><label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
            
        </form>
    )
}
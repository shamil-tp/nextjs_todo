
export const metadata = {
    title:'Login page | Todo app',
    description:'this is the auth page for todo app'
}

export default function AuthLayout({children}:{children:React.ReactNode}){
    return (
        <div className="w-full h-screen bg-indigo-200 flex justify-center items-center">
            <div className="auth__card border-2 border-slate-500 rounded-2xl w-100 p-3 bg-slate-800">
                {children}
            </div>
        </div>
    )
}
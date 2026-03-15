export const metadata = {
    title:"todos | todos Page",
    description:"this is where you create your new todos"
}
export default function TodosLayout({children}:{children:React.ReactNode}){
    return (
        <section className="bg-blue-950 h-screen w-full flex justify-center">
            {children}
        </section>
    )
}
import { addTodo } from "@/actions/todo"

export default function AddTodo(){
    return (
        <>
        <div className="todo__container">
            <form action={addTodo}>
                <input name='todo' className="w-125 h-10 border-2 bg-fuchsia-900 rounded-lg p-3 text-lg font-bold" type="text" placeholder="Add todo" /> <button type="submit" className="rounded-lg px-5 py-2.5 font-extrabold text-3xl bg-indigo-950 border-4 border-emerald-500"> ADD</button>
            </form>
        </div>
        </>
    )
}
import pool from "@/lib/db";
// import { updateTodo } from "@/actions/todo";
import TodoButton from "./TodoButton";
import TodoDelete from "./TodoDelete";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

type Todo = {
    id:string,
    text:string,
    done:boolean,
    created_at:string
}

export default async function TodoList(){
    const session = await getServerSession(authOptions)
    if(!session)return

    const {rows} =await pool.query<Todo>(
        'SELECT * FROM todos WHERE user_id = $1 ORDER BY created_at DESC;',[session.user.id]
    )
    return (
        <div className="todo__list flex flex-col gap-3">
            {rows.length === 0 ?(
                <p className="font-extrabold text-4xl text-white bg-black rounded-2xl border-2 border-amber-500">No todo found</p> ):
                (
                    rows.map((todo)=>(
                        <div key={todo.id} className="list__item w-100 p-5 bg-slate-700 flex items-center justify-between rounded-lg">
            <div className="list__content">
                <p className="text-lg font-bold">{todo.text}</p>
                <p className="font-extrabold text-xs text-slate-500">{new Date(todo.created_at).toLocaleDateString()}</p>
            </div>
            
            <div className="button__container">
<TodoDelete id={todo.id}/>
            <TodoButton id={todo.id} done={todo.done} />
            </div>
        </div>
                    ))
                )
            }
        </div>
    )
}
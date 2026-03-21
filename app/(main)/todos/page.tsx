// import ListItem from "../component/ListItem";
import TodoList from "../../component/TodoList";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function TodosPage() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const session = await getServerSession(authOptions)
  if (!session) redirect('/login')
  return (
    <main className="">
      <div className="todo__container w-full m-2">
        {/* <ListItem/> */}
        <TodoList/>
      </div>
    </main>
  )
}
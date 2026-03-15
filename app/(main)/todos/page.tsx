// import ListItem from "../component/ListItem";
import TodoList from "../../component/TodoList";

export default function TodosPage() {
  return (
    <main className="">
      <div className="todo__container w-full m-2">
        {/* <ListItem/> */}
        <TodoList/>
      </div>
    </main>
  )
}
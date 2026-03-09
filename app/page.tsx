'use client'
import { useState } from "react"
import AddTodo from "./component/AddTodo"

export default function HomePage() {
  const [isStarted,setStart] = useState(false)
  return (
    <main className="w-full h-screen flex justify-center bg-pink-700 p-6">
      {isStarted?
        // <h1>started</h1>
          <AddTodo/>
        :
        <div className="get__started">
        <h1>Welcome to my Todo App</h1>
        <p>Get started by managing your todos.</p>
        <button className="bg-teal-500 text-amber-800 font-lg rounded-lg px-5 py-2.5 font-bold" onClick={()=>{setStart(true)}}>Lets Start</button>
      </div> }

      
    </main>
  )
}
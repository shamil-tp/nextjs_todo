'use server'
import pool from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const addTodo = async (formData:FormData)=>{
    const todo = formData.get("todo")
    if(!todo) return
    await pool.query(
        'INSERT INTO todos (text,done) VALUES ($1,$2);',[todo,false]
    )
    console.log('success')

    revalidatePath('/todos')
    redirect('/todos')
}
// export const updateTodo = async(id:string)=>{
//     if(!id)return
//     const isDone = await pool.query('SELECT DONE FROM todos WHERE ID = $1;',[id])  WE CAN'T DIRECTLY USE IT BECAUSE IT RETURN AN ARRAY.IN THIS CASE AN ARRAY WITH SINGLE ELEMENT [0]
//     await pool.query(
//         'UPDATE todos SET DONE=$1 WHERE ID = $2;',[!isDone,id]
//     )
// }

export const updateTodo = async(id:string)=>{
    if(!id)return
    await pool.query(
        'UPDATE todos SET done= NOT done WHERE ID = $1;',[id]
    )
    revalidatePath('/todos')
    // redirect('/todos')
}

export const deleteTodo = async(id:string)=>{
    if(!id)return
    await pool.query(
        'DELETE FROM todos WHERE ID = $1;',[id]
    )
    revalidatePath('/todos')
}
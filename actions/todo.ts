'use server'
import { authOptions } from '@/lib/auth'
import pool from '@/lib/db'
import bcrypt from 'bcrypt'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const addTodo = async (prevState:{error:string}|null,formData:FormData)=>{
    try{
        const session = await getServerSession(authOptions)
    if(!session)return {error:'Please Login to add todo'}

    const todo = formData.get("todo")
    if(!todo) return {error:'Todo can not be empty'}
    await pool.query(
        'INSERT INTO todos (text,done,user_id) VALUES ($1,$2,$3);',[todo,false,session.user.id]
    )
    console.log('success')

    revalidatePath('/todos')
    redirect('/todos')
    }catch(error){
        console.log(error)
        return {error:"Server Error -- Please try again later."}
    }
}
// export const updateTodo = async(id:string)=>{
//     if(!id)return
//     const isDone = await pool.query('SELECT DONE FROM todos WHERE ID = $1;',[id])  WE CAN'T DIRECTLY USE IT BECAUSE IT RETURN AN ARRAY.IN THIS CASE AN ARRAY WITH SINGLE ELEMENT [0]
//     await pool.query(
//         'UPDATE todos SET DONE=$1 WHERE ID = $2;',[!isDone,id]
//     )
// }

export const updateTodo = async(id:string)=>{
    const session = await getServerSession(authOptions)
    if(!session)return

    if(!id)return
    await pool.query(
        'UPDATE todos SET done= NOT done WHERE ID = $1 AND user_id = $2;',[id,session.user.id]
    )
    revalidatePath('/todos')
    // redirect('/todos')
}

export const deleteTodo = async(id:string)=>{
    const session = await getServerSession(authOptions)
    if(!session)return

    if(!id)return
    await pool.query(
        'DELETE FROM todos WHERE ID = $1 AND user_id = $2;',[id,session.user.id]
    )
    revalidatePath('/todos')
}


export const addNewUser = async(prevState:{error:string} | null,formData:FormData)=>{
    try{
        const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if(!email || !name || !password)return {error:'Please fill required fields'}

    const { rows } = await pool.query(
        'SELECT * FROM users WHERE email = $1',[email]
    )
    if(rows[0])return {error:'Email Already Exists'}

    const hashedPassword =await bcrypt.hash(password,10)

    await pool.query(
        'INSERT INTO users (username,email,password) VALUES($1,$2,$3)',
        [name,email,hashedPassword]
    )
    redirect('/login')
    }catch(error){
        console.log(error)
        return {error:'DB connection error'}
    }
}
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import List from './components/List'
import { ITodo, IUser } from './types/types'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
const App = () => {
   const [users, setUsers] = useState<IUser[]>([])
   const [todos, setTodos] = useState<ITodo[]>([])
   useEffect (() => {
       fetchUsers()
       fetchTodos()
   }, [])
   async function fetchUsers() {
       try {
          const responce =  await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
          setUsers(responce.data)
           
       } catch (error) {
           alert(error)
           
       }
       
   }
   async function fetchTodos () {
       try {
           const responce = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
           setTodos(responce.data)

           
       } catch (error) {
           alert(error)
           
       }
   }
    return (
        <div>
            <Card
                onClick={(nun) => console.log('hi', nun)}
                variant={CardVariant.outlined}
                width='200px'
                height='200px'
            >
                Button
            </Card>
            <List
            items={users}
            renderItem={(IUser) => <UserItem user={IUser} key={IUser.id}/>}
            />
            <UserList users={users} />
            <List items={todos}
            renderItem={(ITodo) => <TodoItem item={ITodo} key={ITodo.id}/>}/>
        </div>
    )
}

export default App

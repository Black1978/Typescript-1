import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import { ITodo } from '../types/types'
import List from './List'
import TodoItem from './TodoItem'

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const responce = await axios.get<ITodo[]>(
                'https://jsonplaceholder.typicode.com/todos?_limit=10'
            )
            setTodos(responce.data)
        } catch (error) {
            alert(error)
        }
    }
    return <List items={todos} renderItem={(ITodo) => <TodoItem item={ITodo} key={ITodo.id} />} />
}

export default TodosPage

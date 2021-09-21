import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { IUser } from '../types/types'
import List from './List'
import UserItem from './UserItem'
import { useHistory } from 'react-router'

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory()
    useEffect(() => {
        fetchUsers()
    }, [])
    async function fetchUsers() {
        try {
            const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(responce.data)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <List
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem
                        onClick={() => history.push('/users/' + user.id)}
                        user={user}
                        key={user.id}
                    />
                )}
            />
        </div>
    )
}
export default UserPage

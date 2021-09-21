import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { IUser } from '../types/types'
interface UserItemPageParams {
    id: string
}

const UserItemPage: FC = () => {
    const params = useParams<UserItemPageParams>()
    const history = useHistory()
    const [user, setUser] = useState<IUser | null>(null)
    async function fetchUser() {
        try {
            const responce = await axios.get<IUser>(
                'https://jsonplaceholder.typicode.com/users/' + params.id
            )
            setUser(responce.data)
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div>
            <button onClick={() => {history.push('/users')}}>Back</button>
            <h1>This is a page of {user?.name}</h1>
            <p>{user?.email}</p>
            <p>{user?.address.city}</p>
            <p>{user?.address.street}</p>
            <p>{user?.address.zipcode}</p>
             
        </div>
    )
}

export default UserItemPage

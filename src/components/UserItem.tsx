import React, { FC } from 'react'
import { IUser } from '../types/types'
interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}
const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
    return (
        <div onClick={() => onClick(user)} key={user.id} style={{ padding: '15px', border: '1px solid black' }}>
            {user.id}. {user.name} is living in {user.address.city} on {user.address.street} street
        </div>
    )
}

export default UserItem

import React, { useState } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'
const App = () => {
   const [users, setUsers] = useState<IUser[]>([])
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
            <UserList users={users} />
        </div>
    )
}

export default App

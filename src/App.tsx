import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import TodosPage from './components/TodosPage'
import UsersPage from './components/UsersPage'
import UserItemPage from './components/UserItemPage'
const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
            </div>
                <Route path='/users' exact>
                    <UsersPage />
                </Route>
                <Route path='/todos' exact>
                    <TodosPage />
                </Route>
                <Route path='/users/:id'>
                    <UserItemPage/>
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default App

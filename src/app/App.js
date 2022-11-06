import {Route, Link, useParams, Routes, Navigate} from 'react-router-dom'

function App() {
  return (
    <>
      <h1>App Layout</h1>
      <Link to="/users">Users list Page</Link>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/users/*" element={<UsersPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

const HomePage = () => {
  return (
    <>
      <h1>MainPage</h1>
    </>
  )
}

const UserProfile = () => {
  const {userId} = useParams()

  return (
    <>
      <h1>User page</h1>
      <div>
        <ul>
          <li>
            <Link to={`/users`}>Users list page</Link>
          </li>
          <li>
            <Link to={`/users/${userId}/edit`}>{`Edit user ${userId}`}</Link>
          </li>
        </ul>
        {`UserId: ${userId}`}
      </div>
    </>
  )
}

const UserPageEdit = () => {
  const {userId} = useParams()

  return (
    <>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <Link
            to={`/users/${userId}/profile`}
          >{`Go to profile user ${userId}`}</Link>
        </li>
        <li>
          <Link to={`/users/${+userId + 1}/profile`}>Another user</Link>
        </li>
        <li>
          <Link to={`/users`}>Users list page</Link>
        </li>
      </ul>
    </>
  )
}

const UserList = () => {
  return (
    <>
      <h1>User List Page</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}/profile`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

const UsersPage = () => {
  const {userId} = useParams()
  console.log(userId)
  return (
    <>
      <h1>Users Layout</h1>
      <Link to="/">Main Page</Link>

      <Routes>
        <Route index element={<UserList />} />
        <Route path=":userId/profile" element={<UserProfile />} />
        <Route path=":userId/edit" element={<UserPageEdit />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </>
  )
}

const users = [
  {id: 1, name: 'User 1'},
  {id: 2, name: 'User 2'},
  {id: 3, name: 'User 3'},
  {id: 4, name: 'User 4'},
  {id: 5, name: 'User 5'}
]

export default App

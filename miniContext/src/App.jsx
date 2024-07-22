

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Password from './components/Password'

function App() {
    
  return (
    <UserContextProvider>
      
  <h1> ready with chai</h1>
  <Login />
  <Profile />
  <Password />
    </UserContextProvider>
 
  )
}

export default App

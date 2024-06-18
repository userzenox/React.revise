import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Cards'
import Cards from './components/Cards'
function App() {
  const [count, setCount] = useState(0)
   let myObj = {
    username: "hitesh",
    age:21
   }
  return (
    <>
   <h1 className ="">Tailwind</h1>
   <Cards channel="chaiaurcode" obj={myObj} />
    
    </>
  )
}

export default App

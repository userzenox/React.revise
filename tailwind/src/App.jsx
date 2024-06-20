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
   let newArr = [1,2,3]
  return (
    <>
   <h1 className ="">Tailwind</h1>
   <Cards username="zenox" btnText ="click me "/>
   <Cards username="libra" />

   {/* <Cards channel="chaiaurcode" obj={myObj} />
   <Cards channel="chaiaurcode" obj={newArr} />
   */}
    </> 
  )
}

export default App


import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  const addValue = () =>{
    if(counter < 100){
      counter = counter + 1
      setCounter(counter );
      console.log(counter);
    }else{
      alert('maximum value reached')
    }
  } 

  const removeValue = () =>{
   if(counter > 0){
    counter = counter - 1
    setCounter(counter);
    console.log(counter);
   }else{
    alert('minimum value reached')
   }
  }
  return (
   <>
   <h1>Chai aur react</h1>
   <h2>Counter value : {counter}</h2>

   <button onClick={addValue}>Add value</button>
   <br />
   <button onClick={removeValue}>remove value</button>
   </>
  )
}

export default App

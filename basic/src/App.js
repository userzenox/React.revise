function App() {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  let char = Math.floor(Math.random() * str.length )
  console.log(char);


  let length=8
  let pass = ""
  for (let i = 1; i <=length; i++) {
    let char = Math.floor(Math.random() * str.length + 1 )
       pass += str.charAt(char)
   }
   console.log(pass);
  
  return (
    <>
    <h1> React study</h1>
   
    </>
  );
}

export default App;

import React from "react"
import "./App.css"


const App = ()=> {

  const [cores, setCores] = React.useState([])

  function handleChange({target}){
    if(target.checked){
      setCores([...cores, target.value])
    }else{
      setCores(
        cores.filter((el)=> {
          console.log(el)
          return el !== target.value
        })
      )
    }
  
  }
  console.log(cores)
  

  return (
    <form>
    <label htmlFor="">
      <input 
        type="checkbox"
        value="azul"
        checked={cores.includes("azul")}
        onChange={handleChange}
        
        />
      Azul 
    </label>

    <label>
      <input 
        type="checkbox"
        value="vermelho"
        checked={cores.includes("vermelho")}
        onChange={handleChange}
        />
        Vermelho 
    </label>

  </form>
  )
}

export default App 
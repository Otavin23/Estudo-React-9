import React from "react"
import "./App.css"

const App = ()=>{
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState(null)


  function handleClick({target}){
    setProduto(target.value)
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input 
          type="radio"
          onChange={({target}) => setCor(target.value)}
          value="azul"
          name="cor"
          />
          Azul 
      </label>
      <label>
        <input 
          type="radio"
          onChange={({target}) => setCor(target.value)}
          value="vermelho"
          name="cor"
          /> 
        Vermelho
      </label>
      {cor}
      <br></br>
      {produto}
      <h2>Produtos</h2>
      <label>
        <input type="radio" onChange={handleClick} name="produto" value="smartphone" />
        Smartphone
      </label>
      <label>
        <input type="radio" onChange={handleClick} name="produto" value="notebook" />
        Notebook
      </label>
    </form>
  )
}

export default App 
import React from "react"

const App = ()=>{

  const [select, setSelect] = React.useState('')


  return (
    <form>
      
      <select value={select} onChange={({target})=> setSelect(target.value) }id="produtos">
        <option disable value="">Selecione algo</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </form>
  )
}
export default App 
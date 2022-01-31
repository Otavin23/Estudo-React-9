import React from "react"
import "./App.css"

const App = ()=>{
  const [valor, setValue] = React.useState("")
  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"]

  const createcolorlabels = coresArray.map((el,index,) => (
    <div>
    <label key={index} style={{textTransform: "capitalize"}}>
      <input
        value={el}
        type="checkbox"
        checked={valor.includes(el)}
        onChange={({target})=> setValue(target.value)}
      />
      {el}
    </label>
    </div>
  ))

  return(
  <>
  <h1>{valor}</h1>
  {createcolorlabels}
  </>
  )
}

export default App 
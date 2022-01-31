import React from "react"
import Input from "./Form/input"
import Select from "./Form/Select"
import "./App.css"
import Radio from "./Form/Radio"


const App = ()=>{
  
  const [nome, setNome] = React.useState("")
  const [sobrenome, setSobrenome] = React.useState("")
  
  /// Verificação do options 

  const [produto, setProduto] = React.useState("")

  return (
    <form>
      <Radio></Radio>
      <Select value={produto} setValue={setProduto} options={["smartphone", "tablet","notebook"]}></Select>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required></Input>
      <Input id="email" label="Email" value={sobrenome} setValue={setSobrenome} />
    <br>
    </br>
    <button>Enviar</button>
    </form>
  )
}

export default App 
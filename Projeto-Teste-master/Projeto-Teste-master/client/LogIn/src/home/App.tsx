import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom"

function App() {
  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  function Entrar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //A adicionar integração com BackEnd

  }

  return (
    <>
        <div className='div1'>
          <h1>LogIn</h1>
          <form onSubmit={Entrar}>
            <label htmlFor="">Nome de Usuário:</label>
            <input type="text" value={usuario} placeholder="Ex: Gustavo Pistori Faraço" onChange={(e) => setUsuario(e.target.value)}/>
            <label htmlFor="">Senha:</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <input type="submit" value="Entrar"/>
          </form>
          <p>Caso não seja cadastrado, <Link to="/registro" className='link'>cadastre-se</Link></p>
        </div>
    </>
  )
}

export default App

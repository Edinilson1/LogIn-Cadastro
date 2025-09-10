import { useState } from 'react'
import '../App.css'
import { Link } from "react-router-dom"
import "../App.css"

function Registro() {
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [usuario, setUsuario] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  async function Registrar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //Fazer integração com o BackEnd
  }


  return (
    <>
        <div className='div1'>
          <h1>Registro</h1>
          <form onSubmit={Registrar}>
            <label htmlFor="">Nome:</label>
            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            <label htmlFor="">Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Senha:</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <input type="submit" value="Entrar"/>
          </form>
          <p>Caso ja tenha uma conta, faça <Link to="/" className='link'>Log-In</Link></p>
          <span>{mensagem}</span>
        </div>
    </>
  )
}

export default Registro
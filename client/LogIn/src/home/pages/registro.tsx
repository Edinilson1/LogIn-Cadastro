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

    try {

      const resposta = await fetch("http://localhost:3000/api/cadastro", {
        method: "post",

        headers: {
          "Content-Type": "application/json"

        },

        body: JSON.stringify({name: usuario, email, password: senha})

      });

      if (!resposta.ok) {
        const err: any = await resposta.json();
        throw new Error(err.message || "Erro no servidor");
      } else {
        setMensagem("Conta Criada");
      }

    } catch(err: any) {
      setMensagem("Erro: " + err.message)
    }

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
            <input type="submit" value="Criar Conta"/>
          </form>
          <p>Caso ja tenha uma conta, faça <Link to="/" className='link'>Log-In</Link></p>
          <span>{mensagem}</span>
        </div>
    </>
  )
}

export default Registro
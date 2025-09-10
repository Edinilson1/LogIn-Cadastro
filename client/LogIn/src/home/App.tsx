import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom"

function App() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  type token = {
    token: string;
  }


  async function Entrar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      
      const resposta = await fetch("http://localhost:3000/api/login", {
        method: "post",

        headers: {
          "Content-Type": "application/json"

        },

        body: JSON.stringify({email, password: senha})

      });

      if (!resposta.ok) {

        const err: any = await resposta.json();
        throw new Error(err.message || "Erro no servidor");

      } else {
        const dados: token = await resposta.json();

        setMensagem(`Logado com token ${dados.token}`);

      }


    } catch (err: any) {
      setMensagem("Erro: " + err.message)
    }

  };

  return (
    <>
        <div className='div1'>
          <h1>LogIn</h1>
          <form onSubmit={Entrar}>
            <label htmlFor="">Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Senha:</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <input type="submit" value="Entrar"/>
          </form>
          <p>Caso não seja cadastrado, <Link to="/registro" className='link'>cadastre-se</Link></p>
          <span>{mensagem}</span>
        </div>
    </>
  )
}

export default App

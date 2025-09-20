import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthGuard(intervaloMs: number = 60000) {
  const navigate = useNavigate();
  const [verificado, setVerificado] = useState(false);

  useEffect(() => {
    const verificarToken = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      try {
        const resposta = await fetch("http://localhost:3000/api/autenticacao", {
          method: "GET",
          headers: { "Authorization": `Bearer ${token}` },
        });

        if (!resposta.ok) {
          sessionStorage.removeItem("token");
          navigate("/");
        } else {
          setVerificado(true);
        }
      } catch {
        sessionStorage.removeItem("token");
        navigate("/");
      }
    };

    verificarToken();

    const intervalo = setInterval(verificarToken, intervaloMs);

    return () => clearInterval(intervalo);
  }, [navigate, intervaloMs]);

  return verificado;
}
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import toast from "react-hot-toast";

export function PlayerPage() {
  const params = useParams();
  const [player, setPlayer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const response = await api.get(`/players/${params.playerId}`);
        setPlayer(response.data.data.attributes);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPlayer();
  }, []);

  async function handleDelete() {
    try {
      const response = await api.delete(`/players/${params.playerId}`);
      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Algo deu errado. Tente novamente mais tarde.");
    }
  }

  function handleToast() {
    toast((t) => (
      <span>
        Tem certeza que deseja <strong>excluir</strong> o cadastro desse
        jogador?
        <button onClick={handleDelete}>Deletar</button>
        <button onClick={() => toast.dismiss(t.id)}>Cancelar</button>
      </span>
    ));
  }

  return (
    <>
      <h1>{player.name}</h1>
      <Link to={`/edit-player/${params.playerId}`}>
        <button>Editar</button>
      </Link>
      <button onClick={handleToast}>Deletar</button>
      <p>{player.characteristics}</p>
      <img src={player.image} alt={player.name} />
      <p>Valor de mercado: {player.marketValue} mi. €</p>
    </>
  );
}

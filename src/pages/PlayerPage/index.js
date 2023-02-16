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
      <img src={player.image} alt={player.name} />
      <h1>{player.name}</h1>

      <p>
        <b>Características:</b> {player.characteristics}
      </p>
      <p>
        <b>Posição:</b> {player.position}
      </p>
      <p>
        <b>Idade:</b> {player.age} anos
      </p>
      <p>
        <b>Altura:</b> {player.height}m
      </p>
      <p>
        <b>Pé:</b> {player.foot}
      </p>
      <p>
        <b>Nacionalidade:</b> {player.nationality}
      </p>
      <p>
        <b>Tempo de contrato:</b> {player.contractTime} anos
      </p>
      <p>
        <b>Valor de mercado:</b> {player.marketValue} mi. €
      </p>
      <Link to={`/edit-player/${params.playerId}`}>
        <button>Editar</button>
      </Link>
      <button onClick={handleToast}>Deletar</button>
    </>
  );
}

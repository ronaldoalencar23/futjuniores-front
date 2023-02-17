import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import toast from "react-hot-toast";
import style from "./style.module.css";

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
      <div class="painel">
        <div>
          <img class="player-img" style={{ backgroundImage: 'url(' + player.image + ')' }} alt={player.name} />
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
            <button class="btn btn-primary">Editar</button>
          </Link>
          <button class="btn btn-danger" onClick={handleToast}>Deletar</button>
        </div>
      </div>
    </>
  );
}

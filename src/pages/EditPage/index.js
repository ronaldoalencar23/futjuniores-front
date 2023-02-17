import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import style from "./style.module.css";

export function EditPage() {
  const [player, setPlayer] = useState({
    name: "",
    characteristics: "",
    position: "",
    age: 0,
    height: 0,
    marketValue: 0,
    contractTime: 0,
    nationality: "",
    image: "",
    foot: "",
  });

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const response = await api.get(`/players/${params.playerId}`);
        console.log(response);
        setPlayer(response.data.data.attributes);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPlayer();
  }, []);

  const navigate = useNavigate();
  const params = useParams();

  function handleChange(e) {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const infosForAPI = { data: { ...player } };
      await api.put(`/players/${params.playerId}`, infosForAPI);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Editar cadastro do jogador</h1>

      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-player-name">Nome do jogador</label>
          <input
            id="input-player-name"
            name="name"
            value={player.name}
            onChange={handleChange}
          />
          <label htmlFor="input-player-characteristics">Características</label>
          <input
            id="input-player-characteristics"
            name="characteristics"
            value={player.characteristics}
            onChange={handleChange}
          />
          <label htmlFor="input-player-position">Posição</label>
          <input
            id="input-player-position"
            name="position"
            value={player.position}
            onChange={handleChange}
          />
          <label htmlFor="input-player-age">Idade</label>
          <input
            id="input-player-age"
            type="number"
            name="age"
            value={player.age}
            onChange={handleChange}
          />
          <label htmlFor="input-player-height">Altura</label>
          <input
            id="input-player-height"
            type="number"
            name="height"
            value={player.height}
            onChange={handleChange}
          />
          <label htmlFor="input-player-marketValue">Valor de mercado</label>
          <input
            id="input-player-marketValue"
            type="number"
            name="marketValue"
            value={player.marketValue}
            onChange={handleChange}
          />
          <label htmlFor="input-player-contractTime">Tempo de contrato</label>
          <input
            id="input-player-contractTime"
            type="number"
            name="contractTime"
            value={player.contractTime}
            onChange={handleChange}
          />
          <label htmlFor="input-player-nationality">Nacionalidade</label>
          <input
            id="input-player-nationality"
            name="nationality"
            value={player.nationality}
            onChange={handleChange}
          />
          <label htmlFor="input-player-image">Imagem</label>
          <input
            id="input-player-image"
            name="image"
            value={player.image}
            onChange={handleChange}
          />
          <label htmlFor="input-player-foot">Pé</label>
          <input
            id="input-player-foot"
            name="foot"
            value={player.foot}
            onChange={handleChange}
          />
          <button class="btn btn-primary">Salvar</button>
        </div>
      </form>
    </>
  );
}

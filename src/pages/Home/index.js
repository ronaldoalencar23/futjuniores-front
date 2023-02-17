import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await api.get("/players");
        console.log(response.data.data);
        setPlayers(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPlayers();
  }, []);

  return (
    <>
      {players
        .sort((a, b) => a.id - b.id)
        .map((currentPlayer) => {
          return (
            <div className={style.card}>
              <Link to={`/player/${currentPlayer.id}`} className={style.link}>
                <img
                  src={currentPlayer.attributes.image}
                  alt={currentPlayer.attributes.name}
                />
                <h2>
                  <strong key={currentPlayer.id}>
                    {currentPlayer.attributes.name}
                  </strong>
                </h2>
              </Link>
            </div>
          );
        })}
    </>
  );
}

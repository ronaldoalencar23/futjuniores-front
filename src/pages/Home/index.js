import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div>
        <h1>Futjuniores</h1>
        <Link to="/create">
          <button>Criar</button>
        </Link>
      </div>

      {players.map((currentPlayer) => {
        return (
          <>
            <Link to={`/player/${currentPlayer.id}`}>
              <strong key={currentPlayer.id}>
                {currentPlayer.attributes.name}
              </strong>
            </Link>
          </>
        );
      })}
    </>
  );
}

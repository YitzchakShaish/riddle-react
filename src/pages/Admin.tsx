import { useState } from "react";
import { getTop5Players } from "../api/playersApi";

type Player = {
  id: number;
  username: string;
  best_avg_time: number;
};

export default function Admin() {
  const [message, setMessage] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);

  async function getTopPlayers() {
    const res = await getTop5Players();
    console.log(res)
    if (res.player && res.player.length > 0) {
      setPlayers(res.player);
      setMessage("Top players loaded!");
    } else {
      setMessage("No players found.");
    }
  }

  return (
    <>
      <div>Admin</div>
      <button onClick={getTopPlayers}>Get Top Players</button>

      {players.length > 0 && (
        <ul>
          {players.map((p) => (
            <li key={p.id}>
              {p.username} — {p.best_avg_time}
            </li>
          ))}
        </ul>
      )}

      {message && <p>{message}</p>}
    </>
  );
}

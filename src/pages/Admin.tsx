import { useState } from "react";
import { getTop5Players } from "../api/playersApi";
import NavBar from "../components/NavBar";
import { getRiddles } from "../api/riddlesApi";

type Player = {
  id: number;
  username: string;
  best_avg_time: number;
};

type Riddle = {
  correctAnswer: string
  name: string
  taskDescription: string
  _id: string
}

export default function Admin() {
  const [message, setMessage] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [riddles, setRiddles] = useState<Riddle[]>([]);

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

  async function showAllRiddles() {
    const response = await getRiddles();
    setRiddles(response);
  }

  return (
    <div className="admin-page">
      <div>Admin</div>
      <button onClick={getTopPlayers}>Get Top Players</button>
      <button onClick={showAllRiddles}>Show all riddles</button>


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

      {riddles.length > 0 && (
        <ul>
          {riddles.map((r) => (
            <li key={r._id}>
              {r.name} — {r.taskDescription} - {r.correctAnswer}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

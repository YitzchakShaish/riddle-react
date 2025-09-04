import { useState } from "react";
import { getTop5Players } from "../api/playersApi";
import { deleteRiddle, getRiddles } from "../api/riddlesApi";
import NewRiddle from "../components/NewRiddle";

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

  const [showPlayers, setShowPlayers] = useState(false);
  const [showRiddles, setShowRiddles] = useState(false);
  const [showNewRiddle, setShowNewRiddle] = useState(false);

  async function getTopPlayers() {
    if (!showPlayers) {
      const res = await getTop5Players();
      if (res.player && res.player.length > 0) {
        setPlayers(res.player);
        setMessage("Top players loaded!");
      } else {
        setMessage("No players found.");
      }
    }
    setShowPlayers(!showPlayers); 
  }

  async function showAllRiddles() {
    if (!showRiddles) {
      const response = await getRiddles();
      setRiddles(response);
    }
    setShowRiddles(!showRiddles); 
  }

  async function deleteRiddleA(id: string) {
    const res = await deleteRiddle(id);
    console.log(res);
    setRiddles((prev) => prev.filter((r) => r._id !== id));
  }

  return (
    <div className="admin-page">
      <div>Admin</div>
      
      <button className="button" onClick={getTopPlayers}>
        {showPlayers ? "Hide Top Players" : "Show Top Players"}
      </button>

      <button className="button" onClick={showAllRiddles}>
        {showRiddles ? "Hide all riddles" : "Show all riddles"}
      </button>

      <button className="button" onClick={() => setShowNewRiddle(!showNewRiddle)}>
        {showNewRiddle ? "Hide New Riddle Form" : "Add New Riddle"}
      </button>

      {showPlayers && players.length > 0 && (
        <ul>
          {players.map((p) => (
            <li key={p.id}>
              player: <strong>{p.username}</strong> — best avg time:{" "}
              <strong>{p.best_avg_time}</strong>
            </li>
          ))}
        </ul>
      )}

      {message && <p>{message}</p>}

      {showRiddles && riddles.length > 0 && (
        <ul>
          {riddles.map((r) => (
            <li key={r._id}>
              {r.name} — {r.taskDescription} - {r.correctAnswer}{" "}
              <button onClick={() => deleteRiddleA(r._id)}>delete</button>
            </li>
          ))}
        </ul>
      )}

      {showNewRiddle && <NewRiddle />}
    </div>
  );
}

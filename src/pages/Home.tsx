import { useMemo } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const messages = [
    "Sharpen your mind – riddles await!",
    "Every puzzle has a key. Can you find it?",
    "Compete, solve, and climb the leaderboard.",
    "Think fast. Solve smart. Have fun!"
  ];

  const randomMessage = useMemo(() => {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to the Riddle Game</h1>
      <p>{randomMessage}</p>
      <NavBar />
    </div>
  );
}


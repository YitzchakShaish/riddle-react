import { useState, useRef, type FormEvent } from "react";
import { getRiddles } from "../api/riddlesApi";
import "./Game.css"

export default function Game() {
  const [riddles, setRiddles] = useState<any[]>([]);
  const currentIndexRef = useRef(0);
  const userAnswerRef = useRef("");
  const [renderIndex, setRenderIndex] = useState(0); 
  const [status, setStatus] = useState<"success" | "failure" | "">("");

  async function startGame() {
    const response = await getRiddles();
    console.log(response);
    setRiddles(response);
    currentIndexRef.current = 0;
    userAnswerRef.current = "";
    setRenderIndex(0);
    setStatus("");
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currentRiddle = riddles[currentIndexRef.current];

    if (userAnswerRef.current === currentRiddle.correctAnswer) {
      setStatus("success");
      setTimeout(() => {
        setStatus("");
        userAnswerRef.current = "";
        if (currentIndexRef.current + 1 < riddles.length) {
          currentIndexRef.current++;
          setRenderIndex(currentIndexRef.current); 
        } else {
          alert("You finished all the puzzles!");
        }
      }, 1000);
    } else {
      setStatus("failure");
      setTimeout(() => {
        setStatus("");
      }, 1000);
    }
  };

  if (riddles.length === 0) {
    return (
      <>
        <h1>Fun game..!</h1>
        <button className="button" onClick={startGame}>Start Game</button>
      </>
    );
  }

  const currentRiddle = riddles[currentIndexRef.current];

  return (
    <div className="riddle-card">
      <strong>riddle {currentIndexRef.current + 1} of {riddles.length}</strong>
      <h3>{currentRiddle.taskDescription}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue=""
          onChange={(e) => (userAnswerRef.current = e.target.value)}
          placeholder="Enter your answer"
        />
        <button type="submit">submit</button>
      </form>
      {status === "success" && <p className="answer correct-answer">correct answer!</p>}
      {status === "failure" && <p className="answer wrong-answer">wrong answer!</p>}
    </div>
  );
}

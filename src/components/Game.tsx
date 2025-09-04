import { useState, useRef, type FormEvent, useEffect, useContext } from "react";
import { getRiddles } from "../api/riddlesApi";
import "./Game.css"
import { useTimer } from "./useTimer";
import { updateMinTimeAPI, updateSumGames } from "../api/playersApi";
import { UserContext } from "../AppRoutes";

export default function Game() {
  const user = useContext(UserContext)

  const [riddles, setRiddles] = useState<any[]>([]);
  const currentIndexRef = useRef(0);
  const userAnswerRef = useRef("");
  const [renderIndex, setRenderIndex] = useState(0);
  const [status, setStatus] = useState<"success" | "failure" | "">("");
  const { seconds, start, stop } = useTimer();

  useEffect(() => {
    if (riddles.length > 0) {
      start();
    }
    return () => stop();
  }, [riddles]);


  async function startGame() {
    const response = await getRiddles();
    console.log(response);
    setRiddles(response);
    currentIndexRef.current = 0;
    userAnswerRef.current = "";
    setRenderIndex(0);
    setStatus("");
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const currentRiddle = riddles[currentIndexRef.current];

    if (userAnswerRef.current === currentRiddle.correctAnswer) {
      setStatus("success");
      setTimeout(async () => {
        setStatus("");
        userAnswerRef.current = "";
        if (currentIndexRef.current + 1 < riddles.length) {
          currentIndexRef.current++;
          setRenderIndex(currentIndexRef.current);
        } else {
          if (user.id) {
            const res = await updateMinTimeAPI(String(user.id), Math.floor(seconds / riddles.length));
            console.log(res);
            const res2 = await updateSumGames(String(user.id));
            console.log(res2);

          }
          stop();
          console.log("took:", seconds, "seconds");
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
      {seconds && <p>{seconds}</p>}
    </div>
  );
}

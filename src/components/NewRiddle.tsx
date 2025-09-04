import { useRef } from "react";
import { createRiddle } from "../api/riddlesApi";

export default function NewRiddle() {
    const riddleRef = useRef<{ name: string, correctAnswer: string, taskDescription: string }>({ name: "", correctAnswer: "", taskDescription: "" })

    async function addNewRiddle() {
        const res = await createRiddle(
            riddleRef.current.name,
            riddleRef.current.taskDescription,
            riddleRef.current.correctAnswer
        )
        console.log(res);
    }

    return (
        <div className="new-riddle">
            <form className="form riddle-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    addNewRiddle();
                }}
            >
                <div className="fild">
                    <strong>riddle name: </strong>
                    <input
                        type="text"
                        onChange={(e) => (riddleRef.current.name = e.target.value)}
                        placeholder="enter your name: "
                        required
                        minLength={3}
                    />
                </div>

                <div className="fild">
                    <strong>task description:</strong>

                    <input
                        type="text"
                        onChange={(e) => (riddleRef.current.taskDescription = e.target.value)}
                        placeholder="enter the task description: "
                        required
                        minLength={3}
                    />
                </div>
                <div className="fild">
                    <strong>correct answer:</strong>

                    <input
                        type="text"
                        onChange={(e) => (riddleRef.current.correctAnswer = e.target.value)}
                        placeholder="enter  the correct answer: "
                        required
                        minLength={3}
                    />
                </div>

                <div className="signup-buttons">
                    <button type="submit" className="button">
                        submit
                    </button>

                </div>
            </form>

        </div>
    )
}

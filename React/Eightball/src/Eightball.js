import { useState } from "react"
import "./Eightball.css"
import answers from './answers'

const choice = (arr) => {
    const randomIdx = Math.floor(Math.random() * arr.length)
    return arr[randomIdx]
}

const Eightball = () => {
    const [msg, setMsg] = useState("Think of a question!")
    const [color, setColor] = useState('black')

    const handleClick = () => {
        const { msg, color } = choice(answers);
        setMsg(msg);
        setColor(color)
    }
    const resetBall = () => {
        setMsg("Think of a quiestion!")
        setColor("black")
    }
    return (
        <div>
            <div className="Eightball" onClick={handleClick} style={{ backgroundColor: color }}>
                <b>{msg}</b>
            </div>
            <div>
                <button className="Eightball-reset" onClick={resetBall}>Reset</button>
            </div>
        </div>
    )
}

export default Eightball;

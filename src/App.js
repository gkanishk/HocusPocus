import React, { useEffect, useState } from "react";
import Shape from "./Component/Shape";
import "./App.css";

function App() {
    const [t, sett] = useState(0);
    const [f, setf] = useState(false);
    const [xCoordinate, setXcoordinate] = useState();
    const [yCoordinate, setYcoordinate] = useState();

    useEffect(() => {
        let interval = null;
        if (f) {
            interval = setInterval(() => {
                sett((t) => t + 1);
            }, 1000);
        } else if (!f && t !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [f, t]);
    useEffect(() => {
        window.addEventListener("mousemove", checkCoordinateChange);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [xCoordinate, yCoordinate]);

    function toggle() {
        setf(false);
        alert("Congratulation");
        window.removeEventListener("mousemove", checkCoordinateChange);
    }
    function restart() {
        sett(0);
        setf(true);
    }

    function checkCoordinateChange(e) {
        if ("dataname" in e.target.attributes) {
            var xv = parseInt(`${e.x}`) - parseInt(`${e.target.offsetLeft}`);
            var yv =
                parseInt(`${e.target.offsetTop}`) +
                parseInt(`${e.target.offsetHeight}`) -
                parseInt(`${e.y}`);
            document.getElementById("sdata").innerHTML = `X: ${xv} Y: ${yv}`;
            if (xv === xCoordinate && yv === yCoordinate) {
                toggle();
            }
        }
    }

    const generateCord = () => {
        const x = Math.floor(Math.random() * 300);
        const y = Math.floor(Math.random() * 280);
        setXcoordinate(x);
        setYcoordinate(y);
        document.getElementById("showCd").innerHTML = `X: ${x} Y: ${y}`;
        restart();
    };
    return (
        <div className="App">
            <div className="container">
                <h2>Hocus Focus</h2>
                <div className="data">
                    <div className="showTime">
                        Time:
                        <br />
                        {t === 0 ? "" : t}
                    </div>
                    <div className="getData">
                        <div className="showCord" id="showCd">
                            Start
                        </div>
                        <button id="btn" onClick={() => generateCord()}>
                            Generate
                        </button>
                    </div>
                </div>
                <Shape />
                <h4>
                    I am weak in maths please help me find co-ordinates.
                    <br />
                    <h5>Hover to match the values</h5>
                </h4>
            </div>
        </div>
    );
}

export default App;

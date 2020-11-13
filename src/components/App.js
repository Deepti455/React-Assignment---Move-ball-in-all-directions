import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setRenderBall(false), 
    setX(0), 
    setY(0),
    setBallPosition({
      left : "0px",
      top : "0px",
    })
  };
  const renderChoice = () => {setRenderBall(true)};
   
  const moveBall = (evt) => {
    if(renderBall===true){
      if(evt.key === "ArrowUp"){
        y-=5;
        setY(y);
        setBallPosition({
          ...ballPosition,
          top: y+"px",
          left: x+"px"});
      }else if(evt.key === "ArrowDown"){
        y+=5;
        setY(y);
        setBallPosition({
          ...ballPosition,
          top: y+"px",
          left: x+"px"});
      }else if(evt.key === "ArrowLeft"){
        x-=5;
        setX(x);
        setBallPosition({
          ...ballPosition,
          top: y+"px",
          left: x+"px"});
      }else if(evt.key === "ArrowRight"){
        x+=5;
        setX(x);
        setBallPosition({
          ...ballPosition,
          top: y+"px",
          left: x+"px"});
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', moveBall);

    return () => {
      window.removeEventListener('keydown', moveBall);
    };
  });
  // addEventListener('keydown', moveBall)
  return (
    <div className="playground">
      
      <button onClick={reset} className="reset">
        Reset
      </button>
      {/* {renderChoice()} */}
      {renderBall? <div className="ball" style={ballPosition}></div> : <button className="start" onClick={renderChoice}>Start</button>}
    </div>
  );
};

export default App;

import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // const [myevt, setEvt] = useState(false);
  const [renderBall, setRenderBall] = useState(false);
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    // setEvt(false),
    setRenderBall(false), 
    setX(0), 
    setY(0),
    setBallPosition({
      left : "0px",
      top : "0px",
    })
  };
   
  const checkRender = () =>{setRenderBall(true)};

  const renderChoice = () => {
    if(renderBall===true){
      return <div className="ball" style={ballPosition}></div> 
    }else{
      return <button className="start" onClick={checkRender}>Start</button>
    }
  };
   
  const moveBall = (evt) => {
    if(renderBall===true){
      if(evt.key === "ArrowUp"){
        // yVal=5;
        y-=5;
        setY(y);
        setBallPosition({
          // ...ballPosition,
          top: y+"px",
          left: x+"px"
        });   
      }else if(evt.key === "ArrowDown"){
        y+=5;
        setY(y);
        setBallPosition({
          // ...ballPosition,
          top: y+"px",
          left: x+"px"});
      }else if(evt.key === "ArrowLeft"){
        x-=5;
        setX(x);
        setBallPosition({
          // ...ballPosition,
          top: y+"px",
          left: x+"px"});
      }else if(evt.key === "ArrowRight"){
        x+=5;
        setX(x);
        setBallPosition({
          // ...ballPosition,
          top: y+"px",
          left: x+"px"});
      }
    }
  }

  // if(myevt===false){
  //   window.addEventListener('keydown', moveBall);
  //   // console.log("hello");
  //   setEvt(true);
  // }
  useEffect(() => {
    window.addEventListener('keydown', moveBall);
    console.log(x);
    console.log(y);

    return () => {
      window.removeEventListener('keydown', moveBall);
    };
  });
  
  return (
    <div className="playground">
      
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;

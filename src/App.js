import React,{useEffect,useState} from 'react';
import Shape from './Component/Shape'
import './App.css';

function App() {
  var x;
  var y;
  useEffect(() => {
    window.addEventListener('mousemove',(e)=>{
      if("dataname" in e.target.attributes)
      {var xv=parseInt(`${e.x}`)-parseInt(`${e.target.offsetLeft}`);
      var yv=(parseInt(`${e.target.offsetTop}`)+parseInt(`${e.target.offsetHeight}`))-parseInt(`${e.y}`);
      document.getElementById('sdata').innerHTML=`X: ${xv} Y: ${yv}`
      console.log(xv+" "+x);
      if(xv==x&&yv==y)
      {
        alert("Congratulations")
      }
    }
    })
  }, []);

  const generateCord=()=>
  {
    x=(Math.floor(Math.random()*300));
    y=(Math.floor(Math.random()*300));
    document.getElementById("showCd").innerHTML=`X: ${x} Y: ${y}`;
    console.log(x+" "+y);
  }
  return (
    <div className="App">
      <h2>Hocus Pocus</h2>
      <div className="getData">
        <div className="showCord" id="showCd">Start</div>
        <button id="btn" onClick={()=>generateCord()}>Generate</button>
      </div>
      <Shape/>
      <h4>I am weak in maths please find help me find co-ordinates.</h4>
    </div>
  );
}

export default App;

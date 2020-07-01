import React,{useEffect} from 'react';
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
      if(xv===x&&yv===y)
      {
        alert("Congratulations")
      }
    }
    })
  }, [x,y]);

  const generateCord=()=>
  {
    x=(Math.floor(Math.random()*300));
    y=(Math.floor(Math.random()*300));
    document.getElementById("showCd").innerHTML=`X: ${x} Y: ${y}`;
  }
  return (
    <div className="App">
      <div className="container">
      <h2>Hocus Focus</h2>
      <div className="getData">
        <div className="showCord" id="showCd">Start</div>
        <button id="btn" onClick={()=>generateCord()}>Generate</button>
      </div>
      <Shape/>
      <h4>I am weak in maths please help me find co-ordinates.<br/><h5>Hover to match the values</h5></h4>
      
      </div>
    </div>
  );
}

export default App;

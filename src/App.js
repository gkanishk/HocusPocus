import React,{useEffect} from 'react';
import Shape from './Component/Shape'
import './App.css';

function App() {
  var x;
  var y;
  const [t,sett] =React.useState(0);
  const [f, setf] = React.useState(false)
  function toggle(){
    setf(false);
    alert("Congratulation")
  }
  function restart(){
    sett(0);
    setf(true);
  }
  useEffect(()=>{
    let interval=null;
    if(f){
      interval=setInterval(()=>{
        sett(t=>t+1);
      },1000);
    }else if(!f && t!==0){
      clearInterval(interval);
    }
    return()=>clearInterval(interval);
  },[f,t])
  useEffect(() => {
    window.addEventListener('mousemove',(e)=>{
      if("dataname" in e.target.attributes)
      {var xv=parseInt(`${e.x}`)-parseInt(`${e.target.offsetLeft}`);
      var yv=(parseInt(`${e.target.offsetTop}`)+parseInt(`${e.target.offsetHeight}`))-parseInt(`${e.y}`);
      document.getElementById('sdata').innerHTML=`X: ${xv} Y: ${yv}`
      if(xv===x&&yv===y)
      {
        toggle();
      }
    }
    })   
  }, [x,y]);

  const generateCord=()=>
  {
    x=(Math.floor(Math.random()*300));
    y=(Math.floor(Math.random()*280));
    document.getElementById("showCd").innerHTML=`X: ${x} Y: ${y}`;
    restart();
  }
  return (
    <div className="App">
      <div className="container">
  <h2>Hocus Focus</h2>
      <div className="data">
        <div className="showTime">
          Time:<br/>{t===0?"":t}
        </div>
      <div className="getData">
        <div className="showCord" id="showCd">Start</div>
        <button id="btn" onClick={()=>generateCord()}>Generate</button>
      </div>
      </div>
      <Shape/>
      <h4>I am weak in maths please help me find co-ordinates.<br/><h5>Hover to match the values</h5></h4>
      
      </div>
      <footer></footer>
    </div>
  );
}

export default App;

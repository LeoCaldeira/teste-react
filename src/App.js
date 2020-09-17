import React, {useState, useEffect} from 'react';
import '../src/App.css';
import { IoIosPaperPlane } from "react-icons/io";
// import { Checkbox } from "react-input-checkbox";
import moment from "moment";

function App() {
    
  const [time, setTime] = useState(moment().format("HH:mm:ss"));
  const [inputValue, setInputValue] = useState("");
  const [direction, setDirection] = useState("eta");


    useEffect(() => {

        setInterval(() => {
          setTime(moment().format("HH:mm:ss"));
        }, 1000); //1000 faz comque seja arualizado a cada 1 seg
    }, []); //[] faz com que só seja executado uma vez

  
  

  const onCLickButtonSend = () => {
    setDirection(setInputValue);
    
    //apagar o que ta no input
    setInputValue("");
  };

  return (
    <div className="App">
      <div className="ask-side">
        <div className="title"> Para qual lado devemos mudar a Janela ?</div>
        <div className="resposta">
          <input className="input-resposta" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
          <button className="send-icon" onClick={onCLickButtonSend}><IoIosPaperPlane color="#fff" size="20px" /></button>
        </div>
        <div className="time"><span>{time}</span></div>
      </div>
    <div className={direction}></div>
    </div>
  );
}

export default App;

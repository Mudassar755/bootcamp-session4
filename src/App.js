import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {
  let [count, setCount] = useState(0)
  let [isDayTime, setDayTime] = useState(false)
  return (
    <div className={`${isDayTime ? 'dayLight' : 'night'}`}>
     <Message counter = {count} />
     <div className = "btn">
     <button onClick = {() => setCount(count + 1)}>Count Up</button>
       {count > 0 ? <button onClick = {() => setCount(count - 1)}>Count Down</button> : null}
     <button onClick = {() => setDayTime(!isDayTime)}>Change Effect</button>
     </div>
    </div>
  );
}

export default App;

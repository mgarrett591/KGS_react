import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KGSi } from './KGSi';
import { Grammer } from "./Grammer";

function Example() {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    const [gram, setGrammer]  = useState(new Grammer());
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <header>Korean Grammar Sytax</header><br/>

        <input value = {gram.Templet} onChange={(e) => setGrammer(KGSi.Interpolator(gram.SetTemplet(e.target.value)))}></input><br/>
        <input value = {gram.EvalString}></input>
        <br/><br/><br/><br/><br/>
        <textarea name="w3review" rows={20} cols={200}></textarea>
      </div>
    );
  }

ReactDOM.render(
    <React.StrictMode>
        <Example />
    </React.StrictMode>,
  document.getElementById('root')
);

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KGSi } from './KGSi';

interface Props {}

interface State {
    templet?: string;
    output?: string;
}

function Example() {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    const [templet, setTeplet] = useState("{unit.item}");
    const [output, setOutput] = useState("");

    return (
      <div>
        <header>Korean Grammar Sytax</header>

        <input value = {templet} onChange={(e) => setTeplet(e.target.value)}></input>
        <button onClick={() => setOutput(KGSi.LeteralInterpolator(templet))}>
          Eval
        </button><br/>
        <input value = {output}></input><br/>
      </div>
    );
  }

ReactDOM.render(
    <React.StrictMode>
        <Example />
    </React.StrictMode>,
  document.getElementById('root')
);

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KGSi } from './KGSi';
import { grammarData } from "./grammarData";

interface Props {}

interface State {
    templet?: string;
    output?: string;
    gData?: grammarData;
    wordmap?: Map<string, string>;
}

function Example() {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    const [templet, setTeplet] = useState("{unit.item}");
    const [output, setOutput] = useState("");
    const [wordmap, setWordmap] = useState(new Map<string, string>());
    const [gData, setGData]  = useState(new grammarData());
    return (
      <div>
        <header>Korean Grammar Sytax</header>

        <input value = {templet} onChange={(e) => setTeplet(e.target.value)}></input>
        <button onClick={() => setOutput(KGSi.Interpolator(templet, wordmap, gData))}>
          Eval
        </button><br/>
        <input value = {output}></input><br/><br/><br/><br/><br/>
        <textarea name="w3review" rows={500} cols={200}></textarea>
      </div>
    );
  }

ReactDOM.render(
    <React.StrictMode>
        <Example />
    </React.StrictMode>,
  document.getElementById('root')
);

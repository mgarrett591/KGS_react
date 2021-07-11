import React from 'react';
import './App.css';
import { KGSi } from './KGSi';

export function App() {
    return (
    <div className="App">
        <header className="App-header">
        <input id="input"/>
        <button onClick={Eval}>Eval</button>
        </header>
    </div>
  );
}

export function Eval() {
    let WordMap: Map<string, string> = new Map<string, string>();
    WordMap.set("bash","Dog");
    alert(KGSi.Interpolator("{bash} {unit.item}",WordMap))
    //alert(<HTMLInputElement>document.getElementById("input")?.innerText);
    //let inputValue = (document.getElementById("input")).value;
}

export default App;


import './App.css';
import React, {useState} from "react"
import Article from "./componenens/Article"

function App() {
  const [click, setIncrementation] = useState(0)
  return (
    
    <div className="App">
      <span>Le nbre de clcik est de : {click} fois </span>
     <Article  incrementation={(elem)=>
     setIncrementation(click + elem)}/>

    </div>
  );
}

export default App

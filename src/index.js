import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const reset = () => {
    console.log("reset");
    // your code here
  };
  // console.log(props);
  //const [state, setState] = useState("RESET");
  //const {state, setState} = useState("RESET");
  //const state = 'RESET';
  //const handleClick = () => Application();

  
  return (
    <button onClick={reset}>RESET</button>
  );// your code here
};



const Application = (props) => {

  // your code here


  const [name, setName] = useState("Ari");

  return (
    <main>
      <input placeholder="Type your name"></input> 
      <Button />
      {/* your code here -- this entire line including the curly braces can be removed */}
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));

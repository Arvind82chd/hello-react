import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // console.log(props);
  const [state, setState] = useState("RESET");
  //const {state, setState} = useState("RESET");
  //const state = 'RESET';
  //const handleClick = () => Application();

  
  return (
    <button onClick={() => console.log('RESET')}>{state}</button>
  );// your code here
};

const Application = (props) => {

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button />
      {/* your code here -- this entire line including the curly braces can be removed */}
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));

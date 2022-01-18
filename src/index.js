import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const {onClick} = props;

  return (
    <button onClick={onClick}>{props.children}</button>
  );
};

const Application = () => {
  const [name, setName] = useState("");
  const reset = () => {
    setName("");
    console.log('reset');
  };

  return (
    <main>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your Name"/>
      <Button onClick={reset}>RESET1</Button>
      {name && <h1>Hello {name}</h1>}

    </main>
  );
};



ReactDOM.render(<Application />, document.getElementById("root"));

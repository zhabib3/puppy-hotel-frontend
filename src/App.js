import React, { useState } from 'react';

function App() {

  // 1. Component & its structure + JSX
  // 2. State & Hooks
  // 3. Props

  const onButtonClick = () => {
    alert("Button has been clicked");
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hello World!</h1>
      <button onClick={onButtonClick}>Click Me</button>
      <input placeholder='some input'></input>

      <p>some brief info</p>

      <img width={100} src="/images/corgi.png"></img>
    </div>
  );
}

export default App;

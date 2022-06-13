import React from 'react'

import './App.css'

const App = () => {
   const message = 'Hello world!'

   return (
    <div>
      <div className="container">{message}</div>
      <button onClick={ () => (message = "Ola??")}>
        Mudar texto</button>
    </div>
   )
  };

export default App;

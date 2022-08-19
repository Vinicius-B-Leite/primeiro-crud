import './App.css'
import React, { useEffect } from 'react'
import axios from 'axios'

function App() {
  useEffect(()=>{
    axios.get('http://localhost:3001/').then(res => {
      console.log(res)
    }).catch(erro=>console.log(erro))

  }, [])
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;

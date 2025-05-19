import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(res => setMessage(res.data.message))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>React + Express</h1>
      <p>{message}</p>
    </div>
  )

}

export default App

import React, {useState} from 'react';
import Form from './components/Form';
import './App.css'; 

function App() {
  const [ state, setState ] = useState ("");
    return (
      <div className="App">
        <Form input={state} setInput={setState}/>
    </div>
  );
}

export default App;
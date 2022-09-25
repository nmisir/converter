import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ItemsList from './components/ItemsList';

function App() {
  const [inputText, setInputText] = useState("");
  const [inputNum, setInputNum] = useState("");
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Currency converter</h1>
      </header>
      <Form 
        inputText={inputText} 
        inputNum={inputNum} 
        items={items} 
        setItems={setItems} 
        setInputText={setInputText} 
        setInputNum={setInputNum}
      />
      <ItemsList setItems={setItems} items={items} />
    </div>
  );
}

export default App;

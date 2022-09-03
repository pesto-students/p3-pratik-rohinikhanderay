import { useState } from 'react';
import './App.css';
// import BackgroundAnimate from './BackgroundAnimate';
import InputShortener from './input';
import LinkResult from './linkresult';
function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
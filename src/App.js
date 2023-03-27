import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [number, setNumber] = useState('');

  useEffect(()=>{
    
    console.log(number*number);
  },[number])


  return (
    <div className="App">
        <label>
          Number:
        </label>
        <input type= "number"
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
        />

      {/* <button type='submit' className='btn' value={number} 
      onClick={(e) => setNumber(e.target.value)}>Sqaure Me</button> */}
       
      
    </div>
  );
}

export default App;

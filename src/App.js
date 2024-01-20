import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Home';
function App() {
  const[memoCount,setMemoCount]=useState(0);
  const[count,setCount]=useState(0);

  useEffect(()=>{
    console.log('in main')
  })

  return (
   <div>
    <h1>Use Memo example</h1>
    <button onClick={()=>setCount(count+1)}>count:{count}</button>
    <button onClick={()=>setMemoCount(memoCount+1)}>Memo Count:{memoCount}</button>
    <Home data={memoCount} />
    </div>
  );
}

export default App;

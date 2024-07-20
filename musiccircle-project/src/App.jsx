import { useState,useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Circle from '/src/components/Circle.jsx'
import Note from '/src/components/Note.jsx'
import LeftPanel from '/src/components/LeftPanel'
import RightPanel from '/src/components/RightPanel'

function App() {
  const [count, setCount] = useState(0)
  const [note, setNote] = useState(null)
  const [isWideEnough, setIsWideEnough] = useState(window.innerWidth >= 1530);

  useEffect(() => {
    const handleResize = () => {
      setIsWideEnough(window.innerWidth >= 1530);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {note && isWideEnough && <LeftPanel note={note} setNote={setNote}/>}
      {note && isWideEnough && <RightPanel note={note} setNote={setNote}/>}
      <h1>Circle of Fifths</h1>    
      <p className='smallprint'>an interactive music theory cheat sheet</p>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Work in Progress
      </p> */}
      <Circle note={note} setNote={setNote}/>
      <Note note={note} setNote={setNote}/>
    </>
    
  )
}

export default App

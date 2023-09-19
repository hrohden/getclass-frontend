import { useState } from 'react'
import './App.css'
import MomentCard from './MomentCard';
import { Moment } from './Moment';

function App() {
  const [moments] = useState<Moment[]>([]);

  return (
    <>
      <h1>Moments</h1>
      <p>This project is intended to showcase some remarkables moments in my life (trips, family, etc).</p>
      <h2>My moments</h2>
      {moments.map(moment => 
        <MomentCard moment={moment}></MomentCard>
      )}
    </>
  )
}

export default App

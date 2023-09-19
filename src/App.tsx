import { useState } from 'react'
import './App.css'
import MomentCard from './MomentCard';
import { Moment } from './Moment';

function App() {
  const [moments] = useState<Moment[]>([
    {
      title: 'Trip to NYC',
      description: 'It was an amazing trip! Many places to take pictures and visit!',
      isFavorite: false
    }
  ]);

  return (
    <>
      <h1>Moments</h1>
      <p>This project is intended to showcase some remarkables moments in my life (trips, family, etc).</p>
      <h2>My moments</h2>
      {moments.length === 0 && <p>Currently, there are no moments to display</p>}
      {moments.map(moment => 
        <MomentCard moment={moment}></MomentCard>
      )}
    </>
  )
}

export default App

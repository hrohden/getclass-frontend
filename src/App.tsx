import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Favorites from './Favorites'
import Home from './Home'
import { Moment } from './Moment'
import Navbar from './Navbar'
import New from './New'
import MomentsContext from './momentsContext'

const moments: Moment[] = [
  {
    id: '1',
    title: 'Trip to NYC',
    headline: 'My trip to NY with my wife',
    description:
      'It was an amazing trip! Many places to take pictures and visit!',
    isFavorite: false,
  },
  {
    id: '2',
    title: 'Trip to Europe',
    headline: 'My trip to Europe with my wife in 2014',
    description:
      'This trip was when we were waiting for Lucas. Many pictures and great moments.',
    isFavorite: false,
  },
]

function App() {
  return (
    <>
      <MomentsContext.Provider value={moments}>
        <BrowserRouter>
          <Navbar />
          <main className='container mx-auto flex flex-col gap-4'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/favorites' element={<Favorites />} />
            </Routes>
          </main>
        </BrowserRouter>
      </MomentsContext.Provider>
    </>
  )
}

export default App

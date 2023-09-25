import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import New from './pages/New'
import MomentsContextProvider from './store/MomentsContextProvider'

function App() {
  return (
    <MomentsContextProvider>
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
    </MomentsContextProvider>
  )
}

export default App

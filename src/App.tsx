import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AllMoments from './pages/AllMoments'
import Edit from './pages/Edit'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import New from './pages/New'
import Tests from './pages/Tests'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <main className='container mx-auto flex flex-col gap-4'>
          <Routes>
            <Route element={<Home />} index />
            <Route element={<AllMoments />} path='/all' />
            <Route element={<Edit />} path='/edit/:id' />
            <Route element={<Favorites />} path='/favorites' />
            <Route element={<New />} path='/new' />
            <Route element={<Tests />} path='/test' />
          </Routes>
        </main>
      </BrowserRouter>
      <Toaster position='bottom-center' />
    </Provider>
  )
}

export default App

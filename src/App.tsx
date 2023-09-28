import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Edit from './pages/Edit'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import New from './pages/New'
import MomentsContextProvider from './store/MomentsContextProvider'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <MomentsContextProvider>
        <BrowserRouter>
          <Navbar />
          <main className='container mx-auto flex flex-col gap-4'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/edit/:id' element={<Edit />} />
            </Routes>
          </main>
        </BrowserRouter>
      </MomentsContextProvider>
    </QueryClientProvider>
  )
}

export default App

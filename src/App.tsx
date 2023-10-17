import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AllMoments from './pages/AllMoments'
import Edit from './pages/Edit'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import New from './pages/New'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <main className='container mx-auto flex flex-col gap-4'>
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<AllMoments />} path='/all' />
            <Route element={<New />} path='/new' />
            <Route element={<Favorites />} path='/favorites' />
            <Route element={<Edit />} path='/edit/:id' />
            <Route element={<Login />} path='/login' />
            <Route element={<Logout />} path='/logout' />
          </Routes>
        </main>
      </BrowserRouter>
      <Toaster position='bottom-center' />
    </QueryClientProvider>
  )
}

export default App

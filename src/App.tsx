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
import ProtectedRoutes from './utils/ProtectedRoutes'

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
            {/* Public routes */}
            <Route element={<Home />} index />
            <Route element={<Login />} path='/login' />

            {/* Protected routes */}
            <Route element={<ProtectedRoutes />}>
              <Route element={<AllMoments />} path='/all' />
              <Route element={<Edit />} path='/edit/:id' />
              <Route element={<Favorites />} path='/favorites' />
              <Route element={<Logout />} path='/logout' />
              <Route element={<New />} path='/new' />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
      <Toaster position='bottom-center' />
    </QueryClientProvider>
  )
}

export default App

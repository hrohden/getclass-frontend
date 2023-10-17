import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
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
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/all',
          element: <AllMoments />,
        },
        {
          path: '/new',
          element: <New />,
        },
        {
          path: '/favorites',
          element: <Favorites />,
        },
        {
          path: '/edit/:id',
          element: <Edit />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/logout',
          element: <Logout />,
        },
      ],
    },
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position='bottom-center' />
    </QueryClientProvider>
  )
}

export default App

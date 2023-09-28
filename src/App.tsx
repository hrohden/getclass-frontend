import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Edit from './pages/Edit'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import New from './pages/New'
import MomentsContextProvider from './store/MomentsContextProvider'

function App() {
  const queryClient = new QueryClient()
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
      ],
    },
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <MomentsContextProvider>
        <RouterProvider router={router} />
      </MomentsContextProvider>
    </QueryClientProvider>
  )
}

export default App

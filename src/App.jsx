import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'create',
        element: <Create />,
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
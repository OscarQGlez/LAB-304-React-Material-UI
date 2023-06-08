import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Dashboard from '../layaout/Dashboard'

import SignUpArea from '../Components/SignUpArea/SignUpArea'

const router = createBrowserRouter([
  {
    path: '/Home',
    element: <Dashboard />,
    children: [
      {
        path: '/Home',
        element: <Home />
      },
    ]
  },
  {
    path: '/Signup',
    element: <Dashboard />,
    children: [
      {
        path: '/Signup',
        element: <SignUpArea />
      },
    ]
  }
  
])

export default router
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Technologies from './components/Technologies'
import Java from './components/Java'
import Node from './components/Node'
import Vue from './components/Vue'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [ 
        {
          index: true,
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [ 
            {
              index: true,
              element: <Java />
            },
            {
              path: "java",
              element: <Java />
            },
            {
              path: "node",
              element: <Node />
            },
            {
              path: "vue",
              element: <Vue />
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={routerObj} />
}

export default App
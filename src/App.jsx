
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Startgame from './Pages/Startgame'
import Playgame from './Pages/Playgame'
import Home from './Pages/Home'

const gk = createBrowserRouter([
  
  {
    path:"/start",
    element:<Startgame/>
  },{
    path:"/play",
    element:<Playgame/>
  }
  ,{
    path:"/",
    element:<Home/>
  }
])

function App() {

  return (
    <RouterProvider router={gk}/>
  )
}

export default App

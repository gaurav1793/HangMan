
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Startgame from './Pages/Startgame'
import Playgame from './Pages/Playgame'

const gk = createBrowserRouter([
  
  {
    path:"/",
    element:<Startgame/>
  },{
    path:"/play",
    element:<Playgame/>
  }
])

function App() {

  return (
    <RouterProvider router={gk}/>
  )
}

export default App

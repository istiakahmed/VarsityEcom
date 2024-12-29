
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home/Home'

function App() {

  // ================ Routing part
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* =========== Layout ============== */}
        <Route path='/' element={<LayoutOne />} >
        <Route index element={<Home />} />

        </Route>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={myRoute} />
       
    </>
  )
}

export default App

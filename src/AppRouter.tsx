import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// IMPORT LAYOUT
import MainLayout from "./components/layouts/main-layout"
import HomePage from "./components/pages/home/home-page"

const AppRouter = ()=>{
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
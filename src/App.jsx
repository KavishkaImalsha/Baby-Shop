import { BrowserRouter, Outlet, Routes, Route} from "react-router-dom"
import NavBar from "./components/navbars/NavBar"
import RoutePages from "./navigration/RoutePages"
import Home from "./pages/Home"

const App = () => {
    return(
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Home/>}/>
                <Route path="/contact" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App

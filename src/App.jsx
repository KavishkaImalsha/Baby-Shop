import { BrowserRouter, Outlet, Routes, Route} from "react-router-dom"
import NavBar from "./components/navbars/NavBar"
import RoutePages from "./navigration/RoutePages"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

const App = () => {
    return(
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </>
    )
}

export default App

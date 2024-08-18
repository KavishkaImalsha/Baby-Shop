import { Route, Routes } from "react-router-dom";
import PagesDetails from "./PagesDetails.jsx";
const RoutePages = () => {
    const page = PagesDetails.map(({path, element, title}) => {
        
        return <Route key={title} path={`/${path}`} element={element} />
    })

    return <Routes>{RoutePages}</Routes>
}

export default RoutePages
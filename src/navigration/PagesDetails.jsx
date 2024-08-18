import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import Contact from "../pages/Contact.jsx";
const PagesDetails = [
    {
        path : "",
        element : <Home/>,
        title : "Home"
    },
    {
        path : "products",
        element : <Products/>,
        title : "Products"
    },
    {
        path : "contact",
        element : <Contact/>,
        title : "Contact"
    },
];

export default PagesDetails;
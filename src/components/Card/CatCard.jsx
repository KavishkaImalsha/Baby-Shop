import { useState } from "react";
import { Link } from "react-router-dom";

const CatCard = () => {
    const [CardDetails] = useState([
        {
            img: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/cc405293-c36b-48ab-a696-90141e372c88._SL480_.jpg",
            Title: "Baby Essentials",
            Discription: "Discover all the must-have essentials for your little one, from clothing and diapers to feeding and hygiene products. Everything you need for your baby’s daily comfort and care in one place.",
            btn: "Shop Essentials"            
        },
        {
            img: "https://itsmejd.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-20-at-2.39.03-PM.png",
            Title: "Nursery & Decor",
            Discription: "Create the perfect space for your baby with cozy bedding, adorable decor, and nursery furniture. Find inspiration to design a room that's safe, beautiful, and filled with love.",
            btn: "Shop Nursery Decor"            
        },
        {
            img: "https://assets.babycenter.com/ims/2020/08/iStock-953047578_4x3.jpg?width=382",
            Title: "Toys & Learning",
            Discription: "Explore toys that entertain and engage, promoting learning and development at every stage. From soft cuddly toys to interactive learning kits, our collection sparks joy and growth.",
            btn: "Shop Toys for Growth"            
        }
    ]);

    return (
        <div className="grid grid-cols-3 gap-4 mt-3">
            {CardDetails.map((card, index) => (
                <div key={index} className="hover:cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg w-full h-72" src={card.img} alt="Title Image" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.Title}</h5>
                        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{card.Discription}</p>
                        <Link to="/products" className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {card.btn}
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CatCard;

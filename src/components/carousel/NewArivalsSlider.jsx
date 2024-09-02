import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Slider from "react-slick";
import NewArivalsImage from "../../images/NewArivalsImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
const NewArivalsSlider = () => {
    const images = NewArivalsImage
    const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  }

    return(
        <>
                    <div className="container">
                        <Slider {...settings}>
                        {NewArivalsImage.map((item) => (
                            <div key={item.id} className="hover:shadow-2xl hover:cursor-pointer hover:border border-gray-400 hover:rounded">
                            <div className="img-body">
                                <img src={item.url} alt="image" />
                            </div>
                            <div className="h-32">
                                <h2 className="text-center text-lg font-bold text-blue-500 font-cardTitle">{item.productName}</h2>
                                <ul className="pl-4 font-bold text-gray-600">
                                    <li>{item.des1}</li>
                                    <li>{item.des2}</li>
                                    <li>{item.des3}</li>
                                </ul>
                            </div>
                            <div className="relative">
                                <p><span className="line-through text-bold ml-32 text-gray-500">Rs: {item.realPrice}.00</span> <span className="ml-6 text-2xl font-bold text-blue-700">Rs: {item.discountPrice}.00</span></p>
                                <div className="bg-orange-500 text-white font-bold rounded-full w-14 h-14 text-center pt-3 absolute left-[85%] bottom-16 text-2xl">30%</div>
                            </div>
                        </div>
                        ))}
                        </Slider>
                    </div>
        </>
    )
}

export default NewArivalsSlider;
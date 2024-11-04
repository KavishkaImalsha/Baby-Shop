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
                            
                        </div>
                        ))}
                        </Slider>
                    </div>
        </>
    )
}

export default NewArivalsSlider;
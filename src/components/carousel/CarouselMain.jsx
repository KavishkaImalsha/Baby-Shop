import { useEffect, useState } from "react";
import SliderImages from "../../images/SliderImages";
import { GoChevronLeft, GoChevronRight } from "react-icons/go"

const CarouselMain = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlid = () => {
        const isFirstSlid = currentIndex === 0;
        const newIndex = isFirstSlid ? SliderImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlid = currentIndex === SliderImages.length - 1;
        const newIndex = isLastSlid ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    // Auto play
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000)
        return () => clearInterval(intervalId)
    }, [currentIndex]);

    return(
        <div className="w-full h-[450px] m-auto relative group">
            <div style={{backgroundImage: `url(${SliderImages[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-500">
            </div>
            {/* Left Slider */}
            <div onClick={previousSlid} className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <GoChevronLeft/>
            </div>
            {/* right Slider */}
            <div onClick={nextSlide} className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <GoChevronRight/>
            </div>
        </div>
    )
}

export default CarouselMain;
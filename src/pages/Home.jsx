import CarouselMain from "../components/carousel/CarouselMain";
import NewArivalsSlider from "../components/carousel/newArivalsSlider";
const Home = () => {
    return(
        <>
            <CarouselMain/>

            <div className="font-title pt-5 flex items-center text-2xl font-bold text-gray-800 before:flex-1 before:border-t-2 before:border-blue-400 before:me-6 after:flex-1 after:border-t-2 after:border-pink-400 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">New Arrivals</div>

            <NewArivalsSlider/>
            
        </>
    )
}

export default Home;
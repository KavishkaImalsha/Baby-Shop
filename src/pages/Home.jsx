import CarouselMain from "../components/carousel/CarouselMain";
import NewArivalsSlider from "../components/carousel/newArivalsSlider";
import MotionDiscrip from "../components/discriptions/MotionDiscrip";
const Home = () => {
    return(
        <>
            <CarouselMain/>

            <MotionDiscrip 
                url="https://c4.wallpaperflare.com/wallpaper/280/157/300/8k-4k-cute-baby-muffle-cap-wallpaper-preview.jpg" 
                header='"Premium Baby Essentials for Your Little One"'
                discription="At Baby Shop, we believe in providing only the best for your little ones. Our products are carefully curated from trusted brands known for their commitment to quality and safety. From soft, organic cotton clothing to BPA-free feeding supplies, every item is designed with your baby’s comfort and well-being in mind. Explore our wide range of baby essentials, each crafted to meet the highest standards, so you can shop with confidence."
                btnDiscription="Learn More About Our Products"
            />

            <div className="font-title pt-5 flex items-center text-2xl font-bold text-gray-800 before:flex-1 before:border-t-2 before:border-blue-400 before:me-6 after:flex-1 after:border-t-2 after:border-pink-400 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">New Arrivals</div>
            <NewArivalsSlider/>
        </>
    )
}

export default Home;
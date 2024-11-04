import CatCard from "../components/Card/CatCard";
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
                page="/products"
            />

            <div className="font-title pt-5 flex items-center text-2xl font-bold text-gray-800 before:flex-1 before:border-t-2 before:border-blue-400 before:me-6 after:flex-1 after:border-t-2 after:border-pink-400 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">New Arrivals</div>
            <NewArivalsSlider/>

            <MotionDiscrip 
                url="https://images.unsplash.com/photo-1604467794349-0b74285de7e7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMHNob3B8ZW58MHx8MHx8fDA%3D" 
                header='"Exceptional Services for Hassle-Free Parenting"'
                discription="At Baby Shop, we go beyond just selling products. We offer personalized services to make your parenting journey easier. From gift registries and custom product recommendations to hassle-free returns and expert advice, our services are tailored to meet your needs. We are here to ensure that every shopping experience is enjoyable and stress-free. Let us take care of the details so you can focus on what matters most—your baby."
                btnDiscription="Explore Our Services"
                page="/contact"
            />

            <div className="m-8 text-3xl">
                <h1 className="text-blue-600 font-bold">Expore Our Products</h1>
                <CatCard/>
            </div>
            <MotionDiscrip 
                url="https://www.shutterstock.com/image-photo/they-love-spend-time-together-600nw-1074273152.jpg" 
                header='"Welcome to Baby Shop: Where Quality Meets Care"'
                discription="Welcome to Baby Shop, your one-stop destination for all things baby! Our mission is to support parents by offering a comprehensive selection of premium baby products. We understand the importance of safety, comfort, and style when it comes to your baby’s needs. Our shop is dedicated to providing a seamless shopping experience, whether you're browsing online or visiting our store. With knowledgeable staff and a commitment to customer satisfaction, we’re here to help you find exactly what you need."
                btnDiscription="Discover Our Shop’s Story"
                page="/about"
            />
        </>
    )
}

export default Home;
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {Link} from 'react-router-dom';
const MotionDiscrip = ({url, header, discription, btnDiscription, page}) => {
    const containerRef = useRef(null);
    const isInViwe = useInView(containerRef, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInViwe){
            mainControls.start("visible");
        }
    }, [isInViwe])
    return(
        <motion.div className="flex flex-col overflow-x-hidden pt-3">
                <motion.div className="bg-cover bg-fixed bg-no-repeat m-auto w-[97%] border rounded-xl  h-[500px]" style={{backgroundImage: `url(${url})`}}>
                    <motion.h1 className="text-center mt-28 text-5xl text-amber-900 font-bold font-desHeader" 
                    animate={mainControls}
                    initial="hidden"
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0}
                    }}
                    transition={{delay: 0.4}}
                    ref={containerRef}
                    >
                        {header}
                    </motion.h1>

                    <motion.p className="text-center mt-10 text-2xl font-bold text-gray-800"
                    animate={mainControls}
                    initial="hidden"
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0}
                    }}
                    transition={{delay: 0.65}}
                    >
                    {discription}
                    </motion.p>

                    <Link to={page}>
                    <motion.button className="bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded-lg text-center w-56 h-14 ml-[40%] mt-10 hover:bg-amber-900 hover:border-amber-900 hover:text-white" whileHover={{scale: 1.1, transition:{delay:0.1}}}
                    animate={mainControls}
                    initial="hidden"
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0}
                    }}
                    transition={{delay: 0.85}}
                    >
                        {btnDiscription}
                    </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
    )
}

export default MotionDiscrip;
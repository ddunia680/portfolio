import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import dunia from '../../images/dunia.JPG';

function PicComp(props) {
    const animate = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if(inView) {
            animate.start({
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                    type: 'spring', duration: 3
                }
            })
        }
        if(!inView) {
            animate.start({
                y: '20vh',
                opacity: 0,
                scale: 0.7,
            })
        }
    }, [inView, animate]);

    return (
        <motion.div 
                ref={ref}
                animate={animate}
                className='w-[100%] p-7 md:w-[40%]'>
                <img src={dunia} alt=''/>
        </motion.div>
    );
}

export default PicComp;
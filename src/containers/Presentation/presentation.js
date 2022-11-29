import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Presentation(props) {

    const squareVariants = {
        visible: {opacity: 1, scale: 1, transition: { duration: 1 }},
        hidden: {opacity: 0, scale: 0, transition: { duration: 1 }}
    }

    const controls = useAnimation();
    const [ ref, inView ] = useInView();

    useEffect(() => {
        if(inView) {
            controls.start('visible');
        }
    }, [controls, inView])

    return (
        <motion.div 
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={squareVariants}
            className='mb-20 pt-[8rem]'>
                <div className='mx-auto w-[80%] flex flex-col space-y-3 md:space-y-10 text-center px-auto text-white md:w-[50%]'>
                    <p className='text-fromLogo font-bold '>Hello there, I'm </p>
                    <h1 className='text-[2.000rem] text-white font-extrabold font-sans md:text-[5.052rem]'>Dunia Dunia</h1>
                    <p>I'm a big believe in technology as a key to easing every aspect of the human activities through scalable software, well designed and utility based</p>
                    <button className='px-3 w-50 mx-auto border-2 border-fromLogo p-2 rounded-lg transition-all duration-500 text-fromLogo hover:bg-lightButton hover:text-fromLogo hover:transition-all hover:duration-500'>Let's Connect</button>
                </div>
        </motion.div>
    );
}

export default Presentation;
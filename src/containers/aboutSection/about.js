import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import PicComp from '../../components/picComponent/picComp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import dunia from '../../images/dunia.JPG';


function About(props) {
    const animate = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if(inView) {
            animate.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 3
                }
            })
        }
        if(!inView) {
            animate.start({
                y: '20vh',
                opacity: 0
            })
        }
    }, [inView, animate])

    return (
        <div id='about' className='flex flex-col-reverse justify-center md:container mx-0 md:mx-7 md:flex-row'>
            <PicComp/>
            <motion.div 
                ref={ref}
                animate={animate}
                className='w-[90%] flex flex-col mx-4 my-20 md:w-[40%]'>
                <h1 className='text-2xl font-bold text-center md:text-3xl md:text-left'>About Me 
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/></h1>

                <p className='my-3 text-left'>I'm named <span className='text-xl font-bold text-fromLogo md:text-2xl'>Dunia Ghislain</span>, since I learned about the tech industry and the value it adds to every aspect of human's life today, I have been very excited about learning it and growing</p>

                <p className='my-3 text-left'>I'm an educated engineer both in working ethic as well as in the technical aspect. I'm comfortable working with a team and contributing to global projects </p>

                <p className='my-3 text-left'>I'm currently a frontend developer but also in learning of the backend technologies which I will be able to add to my CV soon enough. These the technologies I currently am comfortable working with</p>

                <p className='text-lg text-fromLogo mt-7 md:text-2xl'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> TailwindCSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/> Firebase <FontAwesomeIcon icon={faCircleDot}/></p>
            </motion.div>
            
        </div>
    );
}

export default About;
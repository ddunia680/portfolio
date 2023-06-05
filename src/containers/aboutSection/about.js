import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import PicComp from '../../components/picComponent/picComp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faCircleDot } from '@fortawesome/free-solid-svg-icons'
// import dunia from '../../images/dunia.JPG';


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
        <div id='about' className='flex flex-col-reverse justify-center xl:container mx-0 md:mx-7 md:flex-row'>
            <PicComp/>
            <motion.div 
                ref={ref}
                animate={animate}
                className='w-[90%] flex flex-col mx-4 my-20 md:w-[60%]'>
                <h1 className='text-2xl font-bold text-center md:text-3xl md:text-left'>About Me 
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/></h1>

                <p className='my-3 text-left'>I'm named <span className='text-xl font-bold text-fromLogo md:text-2xl'>Dunia Ghislain</span>, A fullstack web developer in the Javascript Language, A prominent problem solver and a hands on keyboard guy. </p>

                <p className='my-3 text-left'>I'm a prominent engineer both with academic certification and experience in software development and in position to turn that business idea that has been bothering you into a digital product that overlaps your expectation! </p>

                <p className='my-3 text-left'>I'm always working on something so stay tune...</p>

                <p className='text-lg text-fromLogo mt-7 md:text-2xl'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> TailwindCSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/> Firebase <FontAwesomeIcon icon={faCircleDot}/> NodeJS <FontAwesomeIcon icon={faCircleDot}/> ExpressJs <FontAwesomeIcon icon={faCircleDot}/> MongoDB <FontAwesomeIcon icon={faCircleDot}/></p>
            </motion.div>
            
        </div>
    );
}

export default About;
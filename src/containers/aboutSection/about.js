import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import PicComp from '../../components/picComponent/picComp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
// import dunia from '../../images/dunia.JPG';


function About(props) {
    const animate = useAnimation();
    const { ref, inView } = useInView();
    const { t } = useTranslation();

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
                <h1 className='text-2xl font-bold text-center md:text-3xl md:text-left'>{t('aboutMe')} 
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/></h1>

                <p className='my-3 text-left'>{t('named1')}<span className='text-xl font-bold text-fromLogo md:text-2xl'>Dunia Ghislain</span>, {t('named2')}</p>

                <p className='my-3 text-left'>{t('detailed1')}</p>

                <p className='my-3 text-left'>{t('detailed2')}</p>

                <p className='text-lg text-fromLogo mt-7 md:text-2xl'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> TailwindCSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/> Firebase <FontAwesomeIcon icon={faCircleDot}/> NodeJS <FontAwesomeIcon icon={faCircleDot}/> ExpressJs <FontAwesomeIcon icon={faCircleDot}/> MongoDB <FontAwesomeIcon icon={faCircleDot}/></p>
            </motion.div>
            
        </div>
    );
}

export default About;
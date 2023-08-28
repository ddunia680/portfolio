import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation ,motion } from 'framer-motion';
import ProjectItem from '../../components/ProjectItem/projectItem';

import foodApp from '../../images/foodApp.png';
import phonesApp from '../../images/phonesApp.png';
import whatsapp from '../../images/whatsapp.png';
import twitter from '../../images/twitter.png';
import wedding from '../../images/weddingApp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import './projects.css';
import { useTranslation } from 'react-i18next';

function Projects(props) {
    const animate = useAnimation();
    const { ref, inView } = useInView();
    const { t } = useTranslation();

    useEffect(() => {
        if(inView) {
            animate.start({
                y: 0,
                opacity: 1,
                transition: {type: 'spring', duration: 3}
            })
        }
        if(!inView) {
            animate.start({
                y: '20vh',
                opacity: 0
            })
        }
    }, [inView, animate])

    let items = [
        {title: 'Wedding Reception Management', description: t('weddingProjDescription'), stacks: <p className='text-[13px] text-fromLogo mt-[5px] md:text-[15px] text-center md:text-left'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> TailwindCSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/> NodeJs <FontAwesomeIcon icon={faCircleDot}/> ExpressJs <FontAwesomeIcon icon={faCircleDot}/> MongoDB <FontAwesomeIcon icon={faCircleDot}/> Socket.io <FontAwesomeIcon icon={faCircleDot}/></p>, image: wedding, link: 'https://wedding-management-app.vercel.app/' },

        {title: 'My Twitter Clone App', description: t('twitterProjDescription'), stacks: <p className='text-[13px] text-fromLogo mt-[5px] md:text-[15px] text-center md:text-left'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> TailwindCSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/> NodeJs <FontAwesomeIcon icon={faCircleDot}/> ExpressJs <FontAwesomeIcon icon={faCircleDot}/> MongoDB <FontAwesomeIcon icon={faCircleDot}/> Socket.io <FontAwesomeIcon icon={faCircleDot}/></p>, image: twitter, link: 'https://twitter-clone-app-theta.vercel.app/' },

        {title: 'Whatsapp Web Clone App', description: t('whatsappProjDescription'), stacks: <p className='text-[13px] text-fromLogo mt-[5px] md:text-[15px] text-center md:text-left'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> TailwindCSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/> NodeJs <FontAwesomeIcon icon={faCircleDot}/> ExpressJs <FontAwesomeIcon icon={faCircleDot}/> MongoDB <FontAwesomeIcon icon={faCircleDot}/> Socket.io <FontAwesomeIcon icon={faCircleDot}/></p>, image: whatsapp, link: 'https://my-whatsapp-clone.vercel.app/' },
        
        {title: 'Phones Shopping App', description: t('phonesProjDescription'), stacks: <p className='text-[13px] text-fromLogo mt-[5px] md:text-[15px] text-center md:text-left'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/> Firebase <FontAwesomeIcon icon={faCircleDot}/></p>, image: phonesApp, link: 'https://phones-shopping-app.vercel.app/' },

        {title: 'Food Delivery App', description: t('foodsProjDescription'), stacks: <p className='text-[13px] text-fromLogo mt-[5px] md:text-[15px] text-center md:text-left'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/> Firebase <FontAwesomeIcon icon={faCircleDot}/></p>, image: foodApp, link: 'https://e-commerce-food-app-delta.vercel.app/' },
    ]


    return (
        <div id='projects' className='mx-auto mt-60 w-[98%]'>
            <motion.h1 ref={ref} animate={animate} className='text-2xl font-bold text-center mt-10 md:text-3xl'>My Projects 
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
            </motion.h1>

                <div className='w-[98%] overflow-x-scroll myProjects'>
                    <div className='w-[100%] md:w-[110rem] flex flex-col md:flex-row justify-start lg:justify-between items-center space-y-[1rem]'>
                        {items.map(el => {
                            return <ProjectItem title={el.title} description={el.description} stacks={el.stacks} image={el.image} link={el.link} key={Math.random()}/>
                        })}
                    </div> 
                </div>          
        </div>
    );
}

export default Projects;
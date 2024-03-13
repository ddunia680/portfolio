import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import BounceLoader from "react-spinners/BounceLoader";
import ProjWrapper from '../ProjectWrapper/projWrapper';
import ProjectItem from '../ProjectItem/projectItem';

import twitter from '../../assets/twitter.png';
import foodApp from '../../assets/foodApp.png';
import phonesApp from '../../assets/phonesApp.png';
import wedding from '../../assets/weddingApp.png';
import whatsapp from '../../assets/whatsapp.png';
import smartW from '../../assets/smartWatches-App.png';

type projectTypes = {
    id: number,
    title: string,
    image: string,
    description: string,
    link: string
}

export default function Projects() {
    const { t } = useTranslation();
    const animate = useAnimation();
    const { ref, inView } = useInView(); 

    const theProjects: projectTypes[] = [
        { id: Math.random() * 10000, title: 'SmartWatches E-com', image: smartW, description: t('smartWatches_description'), link: 'https://shopping-app-front-end-ts.vercel.app/' },
        { id: Math.random() * 10000, title: 'Wedding Reception', image: wedding, description: t('weddingProjDescription'), link: 'https://wedding-management-app.vercel.app/' },
        { id: Math.random() * 10000, title: 'Twitter App', image: twitter, description: t('twitterProjDescription'), link: 'https://twitter-clone-app-theta.vercel.app/' },
        { id: Math.random() * 10000, title: 'Whatsapp App', image: whatsapp, description: t('whatsappProjDescription'), link: 'https://my-whatsapp-clone.vercel.app/' },
        { id: Math.random() * 10000, title: 'Food E-com', image: foodApp, description: t('foodsProjDescription'), link: 'https://e-commerce-food-app-delta.vercel.app/' },
        { id: Math.random() * 10000, title: 'Phones E-com', image: phonesApp, description: t('phonesProjDescription'), link: 'https://phones-shopping-app.vercel.app/' },
    ]

    useEffect(() => {
        if(inView) {
            animate.start({
                opacity: 1,
                transition: {
                    duration: 4
                }
            })
        } else {
            animate.start({
                opacity: 0
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, inView]);


  return (
    <motion.div 
    ref={ref} 
    animate={animate}
    className=' w-full md:w-[80%] flex flex-col justify-start items-center gap-2 my-[2rem]'>
        <h2 
            className='md:self-start text-2xl md:text-4xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r
            from-fromLogo to-[#960556] flex justify-start items-start gap-2 md:mb-[2rem] 
            drop-shadow-lg md:pl-[2rem] '>
                {t('myProjects')} 
                <BounceLoader 
                    color={"#042143"}
                    loading={true}
                    size={40}
                    aria-label="About section"
                    data-testid="loader"
                />
        </h2>
        <ProjWrapper>
            {theProjects.map(proj => (
                <ProjectItem key={proj.id} title={proj.title} image={proj.image} description={proj.description} link={proj.link} />
            ))}
        </ProjWrapper>
    </motion.div>
  )
}

import MainPicture from '../MainPicture/mainPicture';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import HashLoader from "react-spinners/HashLoader";
import { DiCss3, DiJsBadge,  } from 'react-icons/di';
import { TbFileTypeHtml, TbBrandNodejs  } from 'react-icons/tb';
import { FaReact  } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb  } from 'react-icons/si';
import { IoLogoFirebase } from "react-icons/io5";


export default function About() {
    const animate = useAnimation();
    const { ref, inView } = useInView();
    const { t } = useTranslation();

    useEffect(() => {
        if(inView) {
            animate.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 3
                }
            })
        }
    }, [inView, animate]);



  return (
    <div className='w-full md:w-[80%] flex flex-col-reverse justify-center items-center md:mx-7 md:flex-row'>
        <MainPicture/>
        <motion.div
            ref={ref}
            animate={animate}
            className='w-[90%] flex flex-col mx-4 my-20 md:w-[60%]'
        >
            <h1 className='text-2xl font-extrabold md:text-4xl  text-transparent bg-clip-text bg-gradient-to-r
            from-fromLogo to-[#960556] flex justify-center md:justify-start items-center gap-2 md:mb-[2rem]'>
                {t('aboutMe')}
                <HashLoader 
                    color={"#042143"}
                    loading={true}
                    size={40}
                    aria-label="About section"
                    data-testid="loader"
                />
            </h1>
            <p className='my-3 text-left text-headerColor1 dark:text-blue-200 font-normal md:font-semibold dark:font-normal tracking-widest md:mb-[2rem]'
            >{t('named1')} <span className='text-xl font-bold text-fromLogo md:text-2xl'>Dunia Ghislain</span>, {t('named2')}</p>

            <p className='my-3 text-left text-headerColor1 dark:text-blue-200 font-normal md:font-semibold dark:font-normal tracking-widest md:mb-[2rem]'>
                {t('detailed1')}</p>

            <p className='my-3 text-left text-headerColor1 dark:text-blue-200 font-normal md:font-semibold dark:font-normal tracking-widest md:mb-[2rem]'>
                {t('detailed2')}</p>
            <p className='flex justify-between items-center' >
                <TbFileTypeHtml size={30} className='text-[#e96228]' />
                <DiCss3 size={30} className='text-[#2862e9]'/>
                <DiJsBadge size={30} className='text-[#efd81d]' />
                <SiTypescript size={30} className='text-[#2f74c0]'/>
                <FaReact size={30} className='text-[#087a9f]'/>
                <TbBrandNodejs size={30} className='text-[#72b158]'/>
                <IoLogoFirebase size={30} className='text-[#ffcd35]'/>
                <SiTailwindcss size={30} className='text-[#3ebff8]'/>
                <SiMongodb size={30} className='text-[#17ad55]'/>
            </p>
        </motion.div>
    </div>
  )
}

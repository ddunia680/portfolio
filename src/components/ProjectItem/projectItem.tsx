import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type projectTypes = {
    id?: number,
    title: string,
    image: string,
    description: string,
    link: string
}

export default function ProjectItem({ title, image, description, link }: projectTypes) {
    const [hoveredOn, setHoveredOn] = useState(false);
    const { t } = useTranslation();

    const goToVariants = {
        hidden: {
            y: '100%',
            opacity: 0
        },
        visible: {
            y: '0%',
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
        exit: {
            y: '100%',
            opacity: 0,
        },
    }

  return (
    <motion.div
        variants={{ 
            hidden: { opacity: 0 }, 
            show: { opacity: 1 }, 
        }}
        className='relative min-w-[89%] md:min-w-[20rem] w-[90%] md:w-[20rem] h-[30rem] bg-[#051a36] rounded-2xl shadow-md 
        shadow-[#02070e] flex flex-col justify-evenly items-center space-y-2 px-2' onMouseEnter={() => setHoveredOn(true)} 
        onMouseLeave={() => setHoveredOn(false)}>
        <h3 className='text-fromLogo text-xl text-center font-bold'>{title}</h3>
        <div className='text-blue-200 text-[200] md:text-[500] font-normal tracking-tight h-[40] overflow-hidden text-center'>{description.substring(0, 300).concat('...')}</div>
        <div className='w-full h-[30%] overflow-hidden rounded-lg shadow-lg shadow-black flex justify-center items-center'>
            <img src={image} alt='an Image' className='object-contain'/>
        </div>
        <AnimatePresence initial={false} mode="wait">
            { hoveredOn && 
            <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}} 
            className='duration-200 absolute top-0 left-0 w-full h-full bg-[#000000e1] shadow-inner shadow-black rounded-2xl flex
            justify-center items-center' >
                <motion.div 
                variants={goToVariants} 
                initial='hidden' 
                animate='visible'
                exit='exit'
                className='flex flex-col justify-center items-center gap-2'>
                    <a  target='blank'
                    href={link}
                    className='bg-gradient-to-tr from-fromLogo to-purple-600 px-[2rem] py-[1rem] rounded-full font-bold hover:text-[19px] hover:duration-200 duration-200'>
                        {t('goToApp')}
                    </a>
                    <a
                    className='text-white hover:underline cursor-pointer'>
                        {t('addDetailsLink')}
                    </a>
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    </motion.div>
  )
}

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function MobileNav() {
  const { t } = useTranslation();

    const dropIn = {
        hidden: {
          y: '-100vh',
          opacity: 0,
        },
        visible: {
          y: '0%',
          opacity: 1,
          transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 200,
          }
        },
        exit: {
          y: '-100vh',
          opacity: 0,
        }
      }

      const scrollOnClick = (val: number) => {
        window.scrollTo({
          top: val,
          behavior: 'smooth'
        })
      }

  return (
    <motion.div variants={dropIn} initial='hidden' animate='visible' exit='exit'  
    className='absolute top-[4rem] right-0 bg-[#04254be1] shadow-md shadow-[#04254be1] w-[5rem] flex flex-col justify-start 
    items-center font-[400] text-[100] rounded-bl-lg text-white z-[9000]'>
        <div className='py-[0.2rem] hover:duration-150 hover:underline duration-150' onClick={() => scrollOnClick(550)}>{t('aboutInMenu')}</div>
        <div className='py-[0.2rem] hover:duration-150 hover:underline duration-150' onClick={() => scrollOnClick(1600)}>{t('projects')}</div>
        <div className='py-[0.2rem] hover:duration-150 hover:underline duration-150' onClick={() => scrollOnClick(3830)}>Contact</div>
    </motion.div>
  )
}

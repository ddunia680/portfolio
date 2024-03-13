import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t } = useTranslation();

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  const gridSquarevariants = { 
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const scrollOnClick = (val: number) => {
    window.scrollTo({
      top: val,
      behavior: 'smooth'
    })
  }

  return (
    <motion.div variants={gridContainerVariants} initial='hidden' animate='show' className='h-full w-[70%] flex justify-between items-center text-lg tracking-widest font-semibold text-[#03101fe1] 
    dark:text-white py-1'>
        <motion.div variants={gridSquarevariants} className='px-[1rem] h-full flex justify-center items-center hover:bg-[#04254be1] hover:duration-150 duration-150 rounded-lg 
        cursor-pointer hover:text-white' onClick={() => scrollOnClick(560)}>
            {t('aboutInMenu')}
        </motion.div>
        <motion.div className='px-[1rem] h-full flex justify-center items-center hover:bg-[#04254be1] hover:duration-150 duration-150 rounded-lg 
        cursor-pointer hover:text-white' onClick={() => scrollOnClick(1190)}>
            {t('projects')}
        </motion.div>
        <motion.div className='px-[1rem] h-full flex justify-center items-center hover:bg-[#04254be1] hover:duration-150 duration-150 rounded-lg 
        cursor-pointer hover:text-white' onClick={() => scrollOnClick(2190)}>
            Contact
        </motion.div>
    </motion.div>
  )
}

export default Nav;

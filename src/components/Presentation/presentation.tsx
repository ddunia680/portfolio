import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './presentation.css';
import ConnectB from '../ConnectButton/connectB';

export default function Presentation() {
    const { t } = useTranslation();

  return (  
    <motion.div 
        initial={{y: '50vh', opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{type: 'spring', duration: 4}}
        className='mb-20 pt-[5rem] md:pt-[7rem] text-white'>
                <div className='mx-auto w-[80%] pt-[4rem] flex flex-col space-y-3 md:space-y-10 text-center px-auto text-blue-950 font-semibold dark:text-blue-200 md:w-[50%]'>
                    <p className='text-fromLogo font-bold tracking-wide '>{t('helloPart')} </p>
                    <h1 className='text-[2.000rem] text-blue-950 dark:text-white font-extrabold font-sans md:text-[5.052rem]'>Dunia Dunia</h1>
                    <p className='text-normal tracking-widest'>{t('descriptMe')}</p>
                    <div className='mx-auto'><ConnectB/></div>
                </div>
    </motion.div>
  )
}

import { useEffect, useState } from 'react'
import logo from '../../assets/favicon.ico';
import { RxMoon, RxSun } from "react-icons/rx";
import { FaListUl } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import Nav from '../Navigation/nav';
import MobileNav from '../Navigation/mobileNav';

import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';


type theme = string;

type propsTypes = {
    dropState: boolean,
    changeDropState: (val: boolean) => void
}

const Header = ({ dropState, changeDropState }: propsTypes) => {
    const [theme, setTheme] = useState('dark');
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const element = document.documentElement;
    const [windowSize] = useState(window.innerWidth);
    const { t } = useTranslation();

    useEffect(() => {
        if(darkQuery.matches === false) {
            setTheme('light');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                break;
            case 'light':
                element.classList.remove('dark');
                break;
            default:
                break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    const changeMode = (mode: theme ) => {
        setTheme(mode)
    }
    
  return (
    <header className='fixed top-0 left-0 w-full h-[4rem] md:h-[5rem] flex justify-center items-center bg-white dark:bg-gradient-to-r dark:from-headerColor1 
    dark:to-headerColor2 shadow-md md:shadow-md shadow-white dark:shadow-[#292958] z-[10000] backdrop-blur-xl backdrop-brightness-75'>
        <div className='w-full md:w-[80%] h-full flex justify-between items-center px-[0.5rem] md:px-0 '>
            <div className='w-[2rem] h-[2rem]'>
                <img src={logo} alt='the logo' className='w-full h-full object-contain shadow-md shadow-black' />
            </div>
            <AnimatePresence initial={false} mode='wait'>
                {dropState && <MobileNav/>}
            </AnimatePresence>
            
            
            <div className='w-[5rem] md:w-[30rem] h-full flex flex-row-reverse md:flex-row justify-between items-center '>
                { windowSize > 700 ? 
                    <Nav />
                : 
                    !dropState ? <FaListUl size={20} className='text-headerColor1 dark:text-white' onClick={() => changeDropState(true)} /> 
                    : <BsX size={30} className='text-headerColor1 dark:text-white'  onClick={() => changeDropState(false)}/>
                }
                {/* Mode changer */}
                <div className='w-[3rem] h-[1.7rem] md:w-[4rem] md:h-[2rem] bg-blue-950 dark:bg-white rounded-full shadow-md shadow-black flex 
                justify-between items-center px-1 hover:w-[3.2rem] hover:h-[1.9rem] hover:md:w-[4.2rem] hover:md:h-[2.2rem] 
                hover:duration-150 duration-150'>
                    { theme === 'light' ? 
                    <>
                        <div className='h-[1.5rem] w-[1.5rem] md:h-[1.8rem] md:w-[1.8rem] bg-yellow-400 dark:bg-black rounded-full shadow-md shadow-black '></div>
                        <RxMoon size={20} className='text-gray-300 cursor-pointer' title={t('darkModeHint')} onClick={() => changeMode('dark')}/>
                    </>
                    :
                    <>
                        <RxSun size={20} className='text-orange-700 cursor-pointer' title={t('lightModeHint')} onClick={() => changeMode('light')}/>
                        <div className='h-[1.5rem] w-[1.5rem] md:h-[1.8rem] md:w-[1.8rem] bg-white dark:bg-black rounded-full'></div>
                    </>
                    }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;

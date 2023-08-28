/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import NavItems from '../../components/navigation/navItems';
import GoButton from '../../components/GoButton/goButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faX, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.png'
import { useTranslation } from 'react-i18next';
import './header.css';
import { CSSTransition } from 'react-transition-group';

function Header(props) {
    let [showDropUI, setShowDropUI] = useState(false);
    const [theme, setTheme] = useState('dark');
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const { t } = useTranslation();

    const dropClasses = [`absolute bg-darkBlue right-0 top-[4rem] px-10 border-l-2 border-r-2 border-b-2  border-violet`, showDropUI ? 'dropDownVisible' : 'dropDownNotVisible' ];

    useEffect(() => {
        if(darkQuery.matches === false) {
            setTheme('light');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showDrop = () => {
        setShowDropUI(true);
    }

    const hideDrop = () => {
        setShowDropUI(false);
    }

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

    return (
        <header className='fixed z-10 top-0 w-screen h-[4rem] md:h-20 backdrop-blur-xl backdrop-brightness-75 text-white items-center mx-auto flex flex-row justify-between px-3 shadow-md shadow-violet lg:px-40'>
            <div className='w-[50px] h-[70%]'>
                <img src={logo} alt=''/>
            </div>
            <div className='flex flex-row h-[100%] items-center'>
                <NavItems/>
                <GoButton>
                    <a href='https://firebasestorage.googleapis.com/v0/b/upload-files-4592a.appspot.com/o/sharedFiles%2FCVDuniaDunia-corrected_1685977309486.pdf?alt=media&token=fcd43094-68bb-479c-b8df-08f6d6fc6e1c&_gl=1*e92pev*_ga*MzM0MzY3MzE0LjE2NTU3OTkwOTE.*_ga_CW55HF8NVT*MTY4NTk3NzMzNC4yNi4xLjE2ODU5NzczOTkuMC4wLjA.'>
                        {t('downloadButton')}
                    </a>
                </GoButton>
                <div className='hidden w-[3rem] md:w-[4rem] h-[1.7rem] md:h-[2rem] bg-darkLighterBlue dark:bg-white rounded-full mx-[1rem] md:flex items-center duration-75 dark:duration-75 justify-start dark:justify-end' onClick={() => (setTheme(curr => curr === 'dark' ? 'light' : 'dark'))}>
                    <div className='bg-white dark:bg-darkLighterBlue rounded-full h-[1.6rem] md:h-[1.8rem] w-[1.6rem] md:w-[1.8rem] mx-[0.1rem] md:mx-[0.2rem] flex justify-center items-center duration-75 dark:duration-75'>
                        <FontAwesomeIcon icon={ theme === 'dark' ? faMoon : faSun} className=' w-[0.7rem] md:w-[1rem] text-darkLighterBlue dark:text-white duration-75 dark:duration-75' onClick={() => (setTheme(curr => curr === 'dark' ? 'light' : 'dark'))} title={theme === 'dark' ? t('lightModeTitle') : t('darkModeTitle')} />
                    </div>
                </div>
            </div>
            <div className='h-80% md:hidden flex justify-start items-center'>
                {!showDropUI ? 
                <FontAwesomeIcon icon={faListUl} className='text-fromLogo text-xl'onClick={showDrop}/>
                :
                <FontAwesomeIcon icon={faX} className='text-fromLogo text-xl' onClick={hideDrop}/> }

                <div className='w-[3rem] md:w-[4rem] h-[1.7rem] md:h-[2rem] bg-darkLighterBlue dark:bg-white rounded-full mx-[1rem] flex md:hidden items-center duration-75 dark:duration-75 justify-start dark:justify-end' onClick={() => (setTheme(curr => curr === 'dark' ? 'light' : 'dark'))}>
                    <div className='bg-white dark:bg-darkLighterBlue rounded-full h-[1.6rem] md:h-[1.8rem] w-[1.6rem] md:w-[1.8rem] mx-[0.1rem] md:mx-[0.2rem] flex justify-center items-center duration-75 dark:duration-75'>
                        <FontAwesomeIcon icon={ theme === 'dark' ? faMoon : faSun} className=' w-[0.7rem] md:w-[1rem] text-darkLighterBlue dark:text-white duration-75 dark:duration-75' onClick={() => (setTheme(curr => curr === 'dark' ? 'light' : 'dark'))} />
                    </div>
                </div>
            </div>
            <CSSTransition in={showDropUI} timeout={300} mountOnEnter unmountOnExit>
                <div className={dropClasses.join(' ')}>
                    <ul className='flex flex-col space-y-2'>
                        <li className='hover:text-fromLogo py-1 cursor-pointer' onClick={() => {
                            window.scrollTo({
                                top: 500,
                                behavior: 'smooth'
                            })
                            hideDrop()
                        }}>{t('aboutInMenu')}</li>
                        <li className='hover:text-fromLogo py-1 cursor-pointer' onClick={() => {
                            window.scrollTo({
                                top: 1850,
                                behavior: 'smooth'
                            })
                            hideDrop()
                        }}>{t('projects')}</li>
                        <li className='hover:text-fromLogo py-1 cursor-pointer' onClick={() => {
                            window.scrollTo({
                                top: 4200,
                                behavior: 'smooth'
                            })
                            hideDrop()
                        }}>{t('contacts')}</li>
                    </ul>
                </div>
            </CSSTransition>
            
        </header>
    );
}

export default Header;
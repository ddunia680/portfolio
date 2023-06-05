/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import NavItems from '../../components/navigation/navItems';
import GoButton from '../../components/GoButton/goButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faX } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.png'

function Header(props) {
    let [showDropUI, setShowDropUI] = useState(false);

    const showDrop = () => {
        setShowDropUI(true);
    }

    const hideDrop = () => {
        setShowDropUI(false);
    }

    return (
        <header className='fixed z-10 top-0 w-screen h-[4rem] md:h-20 backdrop-blur-xl backdrop-brightness-75 text-white items-center mx-auto flex flex-row justify-between px-3 shadow-md shadow-violet lg:px-40'>
            <div className='w-[50px] h-[70%]'>
                <img src={logo} alt=''/>
            </div>
            <div className='hidden md:flex flex-row h-[100%] items-center'>
                <NavItems/>
                <GoButton>
                    <a href='https://firebasestorage.googleapis.com/v0/b/upload-files-4592a.appspot.com/o/sharedFiles%2FCVDuniaDunia-corrected_1685977309486.pdf?alt=media&token=fcd43094-68bb-479c-b8df-08f6d6fc6e1c&_gl=1*e92pev*_ga*MzM0MzY3MzE0LjE2NTU3OTkwOTE.*_ga_CW55HF8NVT*MTY4NTk3NzMzNC4yNi4xLjE2ODU5NzczOTkuMC4wLjA.'>
                        Download my CV
                    </a>
                </GoButton>
            </div>
            <div className='h-80% block md:hidden'>
                {!showDropUI ? 
                <FontAwesomeIcon icon={faListUl} className='text-fromLogo text-xl'onClick={showDrop}/>
                :
                <FontAwesomeIcon icon={faX} className='text-fromLogo text-xl' onClick={hideDrop}/> }
            </div>
            {showDropUI ? 
            <div className='absolute bg-darkBlue right-0 top-[4rem] px-10 border-l-2 border-r-2 border-b-2  border-violet'>
                <ul className='flex flex-col space-y-2'>
                    <li className='hover:text-fromLogo py-1 cursor-pointer' onClick={() => {
                        window.scrollTo({
                            top: 500,
                            behavior: 'smooth'
                        })
                        hideDrop()
                    }}>About</li>
                    <li className='hover:text-fromLogo py-1 cursor-pointer' onClick={() => {
                        window.scrollTo({
                            top: 1850,
                            behavior: 'smooth'
                        })
                        hideDrop()
                    }}>Projects</li>
                    <li className='hover:text-fromLogo py-1 cursor-pointer' onClick={() => {
                        window.scrollTo({
                            top: 4200,
                            behavior: 'smooth'
                        })
                        hideDrop()
                    }}>Contacts</li>
                </ul>
            </div>
            : null}
            
        </header>
    );
}

export default Header;
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
        <header className='fixed z-10 top-0 w-screen h-20 bg-darkBlue text-white items-center mx-auto flex flex-row justify-between px-3 shadow-md shadow-violet lg:px-40'>
            <div className='w-[50px] h-[70%]'>
                <img src={logo} alt=''/>
            </div>
            <div className='hidden md:flex flex-row h-[100%] items-center'>
                <NavItems/>
                <GoButton>
                    <a href='https://api.whatsapp.com/send?phone=256788306651&text=Thanks%20for%20contacting'>
                        Let's Connect
                    </a>
                </GoButton>
            </div>
            <div className='h-80% block md:hidden'>
                {!showDropUI ? 
                <FontAwesomeIcon icon={faListUl} className='text-fromLogo text-3xl'onClick={showDrop}/>
                :
                <FontAwesomeIcon icon={faX} className='text-fromLogo text-3xl' onClick={hideDrop}/> }
            </div>
            {showDropUI ? 
            <div className='absolute bg-darkBlue right-0 top-20 px-10 border-l-2 border-r-2 border-b-2  border-violet'>
                <ul className='flex flex-col space-y-2'>
                    <li className='hover:text-fromLogo py-1' onClick={() => {
                        window.scrollTo({
                            top: 500,
                            behavior: 'smooth'
                        })
                        hideDrop()
                    }}>About</li>
                    <li className='hover:text-fromLogo py-1' onClick={() => {
                        window.scrollTo({
                            top: 1900,
                            behavior: 'smooth'
                        })
                        hideDrop()
                    }}>Projects</li>
                    <li className='hover:text-fromLogo py-1' onClick={() => {
                        window.scrollTo({
                            top: 3700,
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
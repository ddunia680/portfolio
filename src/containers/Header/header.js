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
        <header className='fixed top-0 w-screen h-20 bg-darkBlue text-white items-center mx-auto flex flex-row justify-between px-3 shadow-md shadow-violet lg:px-40'>
            <div className='w-[50px] h-[70%]'>
                <img src={logo} alt=''/>
            </div>
            <div className='hidden md:flex flex-row h-[100%] items-center'>
                <NavItems/>
                <GoButton>
                    Download CV
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
                    <li className='hover:text-fromLogo py-1'><a href='#'>About</a></li>
                    <li className='hover:text-fromLogo py-1'><a href='#'>Projects</a></li>
                    <li className='hover:text-fromLogo py-1'><a href='#'>Contacts</a></li>
                </ul>
            </div>
            : null}
            
        </header>
    );
}

export default Header;
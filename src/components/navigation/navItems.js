import React from 'react';

function navItems(props) {
    return (
        <nav className='h-[80%]'>
            <ul className='hidden md:flex flex-row justify-start h-[100%] text-darkLighterBlue dark:text-white'>
                <li className='h-[100%] px-5 mx-1 flex items-center transition-all duration-500 hover:bg-fromLogo hover:text-darkBlue hover:rounded-lg hover:transition-all cursor-pointer hover:duration-500'
                onClick={() => {
                    window.scrollTo({
                        top: 440,
                        behavior: 'smooth'
                    })
                }}>
                    About
                </li>
                <li className='h-[100%] px-5 mx-1 flex items-center transition-all duration-500 hover:bg-fromLogo hover:text-darkBlue hover:rounded-lg hover:transition-all cursor-pointer hover:duration-500'
                onClick={() => {
                    window.scrollTo({
                        top: 1350,
                        behavior: 'smooth'
                    })
                }}>
                    Projects
                </li>
                <li className='h-[100%] px-5 mx-1 flex items-center transition-all duration-500 hover:bg-fromLogo hover:text-darkBlue hover:rounded-lg hover:transition-all cursor-pointer hover:duration-500'
                onClick={() => {
                    window.scrollTo({
                        top: 2100,
                        behavior: 'smooth'
                    })
                }}>
                    Contacts
                </li>
            </ul>
        </nav>
    );
}

export default navItems;
import React from 'react';

function navItems(props) {
    return (
        <nav className='h-[80%]'>
            <ul className='hidden md:flex flex-row justify-start h-[100%]'>
                <li className='h-[100%] px-5 mx-1 flex items-center transition-all duration-500 hover:bg-fromLogo hover:text-darkBlue hover:rounded-lg hover:transition-all hover:duration-500'
                onClick={() => {
                    window.scrollTo({
                        top: 440,
                        behavior: 'smooth'
                    })
                }}>
                    About
                </li>
                <li className='h-[100%] px-5 mx-1 flex items-center transition-all duration-500 hover:bg-fromLogo hover:text-darkBlue hover:rounded-lg hover:transition-all hover:duration-500'
                onClick={() => {
                    window.scrollTo({
                        top: 1400,
                        behavior: 'smooth'
                    })
                }}>
                    Projects
                </li>
                <li className='h-[100%] px-5 mx-1 flex items-center transition-all duration-500 hover:bg-fromLogo hover:text-darkBlue hover:rounded-lg hover:transition-all hover:duration-500'
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
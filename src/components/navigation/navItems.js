import React from 'react';

function navItems(props) {
    return (
        <nav className='h-[80%]'>
            <ul className='hidden md:flex flex-row justify-start h-[100%]'>
                <li className='h-[100%] px-5 mx-1 flex items-center hover:bg-fromLogo hover:text-darkBlue hover:rounded-lg'>
                    <a href='#'>About</a>
                </li>
                <li className='h-[100%] px-5 mx-1 flex items-center hover:bg-fromLogo hover:text-darkBlue hover:rounded-lg'>
                    <a href='#'>Projects</a>
                </li>
                <li className='h-[100%] px-5 mx-1 flex items-center hover:bg-fromLogo hover:text-darkBlue hover:rounded-lg'>
                    <a href='#'>Contacts</a>
                </li>
            </ul>
        </nav>
    );
}

export default navItems;
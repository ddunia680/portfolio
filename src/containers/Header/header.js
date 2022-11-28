import React from 'react';
import NavItems from '../../components/navigation/navItems';
import GoButton from '../../components/GoButton/goButton';


import logo from '../../images/logo.png'

function header(props) {
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
            
        </header>
    );
}

export default header;
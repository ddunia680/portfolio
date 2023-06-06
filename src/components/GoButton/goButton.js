import React from 'react';

function goButton(props) {
    return (
        <button className='hidden md:block px-3 border-2 border-fromLogo p-2 rounded-lg text-fromLogo transition-all duration-500 hover:bg-lightButton hover:text-fromLogo hover:transition-all hover:duration-500'>
            {props.children}
        </button>
    );
}

export default goButton;
import React from 'react';

function goButton(props) {
    return (
        <button className='px-3 border-2 border-fromLogo p-2 rounded-lg text-fromLogo hover:bg-lightButton hover:text-fromLogo'>
            {props.children}
        </button>
    );
}

export default goButton;
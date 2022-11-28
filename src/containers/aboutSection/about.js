import React from 'react';

import dunia from '../../images/dunia.JPG';
function about(props) {
    return (
        <div className='container flex flex-row justify-center'>
            <div className='w-[30%]'>
                <img src={dunia} alt=''/>
            </div>
            <div className='w-[30%]'>
                <p>It is nice to ave you here</p>
            </div>
            
        </div>
    );
}

export default about;
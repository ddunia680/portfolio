import React from 'react';

function presentation(props) {
    return (
        <div className='mb-20 pt-[8rem]'>
            <div className='mx-auto w-[80%] flex flex-col space-y-3 md:space-y-10 text-center px-auto text-white md:w-[50%]'>
                <p className='text-fromLogo font-bold '>Hello there, I'm </p>
                <h1 className='text-[2.000rem] text-white font-extrabold font-sans md:text-[5.052rem]'>Dunia Dunia</h1>
                <p>I'm a big believe in technology as a key to easing every aspect of the human activities through scalable software, well designed and utility based</p>
                <button className='px-3 w-50 mx-auto border-2 border-fromLogo p-2 rounded-lg text-fromLogo hover:bg-lightButton hover:text-fromLogo'>Let's Connect</button>
            </div>
        </div>
    );
}

export default presentation;
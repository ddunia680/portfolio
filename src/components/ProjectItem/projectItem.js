import React from 'react';

function projectItem(props) {
    return (
        <a href={props.link} className=' mx-auto w-[90%] lg:w-[25%] '>
            <div title='click to go to project' className='border-t-2 border-l-2 border-white my-5 rounded-l-lg'>
                <h2 className='p-2'>{props.title}</h2>
                <p className='text-sm p-2 h-[11rem] md:h-[10rem]'>
                    {props.description}
                </p>
                {props.stacks}
                <div className='w-100'>
                    <img src={props.image} alt='' className='rounded-bl-lg'/>
                </div>
                
            </div>
        </a>
    );
}

export default projectItem;
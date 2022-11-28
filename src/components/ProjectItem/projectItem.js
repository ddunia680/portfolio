import React from 'react';

function projectItem(props) {
    return (
        <div className='border-t-2 border-l-2 border-white my-5 mx-auto w-[90%] lg:w-[25%] rounded-lg'>
            <h2 className='p-2'>{props.title}</h2>
            <p className='text-sm p-2 h-[10rem]'>
                {props.description}
            </p>
            {props.stacks}
            <div className='w-100'>
                <img src={props.image} alt=''/>
            </div>
            
        </div>
    );
}

export default projectItem;
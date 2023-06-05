import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

function ProjectItem(props) {
    const animate = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if(inView) {
            animate.start({
                y: 0,
                opacity: 1,
                transition: {type: 'spring', duration: 2}
            })
        }

        if(!inView) {
            animate.start({
                y: '20vh',
                opacity: 0
            })
        }
    }, [inView, animate])

    return (
        <motion.a ref={ref} animate={animate} href={props.link} className='w-[90%] md:w-[25rem] p-[1rem] backdrop-brightness-75 duration-75 rounded-3xl md:mx-[1rem] hover:backdrop-brightness-150 hover:duration-75'>
            <div title='click to go to project' className='flex flex-col justify-start items-center space-y-1'>
                <h2 className='p-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{props.title}</h2>
                <p className='text-sm p-2 text-center md:text-left'>
                    {props.description}
                </p>
                {props.stacks}
                <div className='w-100 h-[10rem] overflow-hidden rounded-xl'>
                    <img src={props.image} alt='' className='rounded-lg object-cover'/>
                </div>
                <p className='text-[12px] pt-[3px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 text-center md:text-left'>{props.link}</p>
                
            </div>
        </motion.a>
    );
}

export default ProjectItem;
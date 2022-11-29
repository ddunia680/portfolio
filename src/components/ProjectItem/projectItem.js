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
        <motion.a ref={ref} animate={animate} href={props.link} className=' mx-auto w-[90%] lg:w-[25%] '>
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
        </motion.a>
    );
}

export default ProjectItem;
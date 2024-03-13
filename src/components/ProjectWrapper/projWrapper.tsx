import { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type propsTypes = {
    children: ReactNode
}

export default function ProjWrapper({ children }: propsTypes) {
    const { ref, inView } = useInView();
    const animate = useAnimation();

    useEffect(() => {
        if(inView) {
            animate.start({
                opacity: 1,
                transition: {
                    duration: 3
                }
            })
        }

    }, [inView, animate]);

  return (
    <motion.div 
        ref={ref}
        animate={animate}
        className='w-full px-[1rem] py-[1rem] flex flex-col md:flex-row justify-start items-center overflow-auto md:space-x-[1rem] 
            space-y-[2rem] md:space-y-0'
    >
        {children}
    </motion.div>
  )
}

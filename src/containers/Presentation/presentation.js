import { motion } from 'framer-motion';

function Presentation(props) {


    return (
        <motion.div 
            // how things should be at the beginning
            initial={{y: '50vh', opacity: 0}}
            //the animation that should play
            animate={{y: 0, opacity: 1}}
            //the animation type and duration
            transition={{type: 'spring', duration: 4}}
            className='mb-20 pt-[8rem]'>
                <div className='mx-auto w-[80%] flex flex-col space-y-3 md:space-y-10 text-center px-auto text-white md:w-[50%]'>
                    <p className='text-fromLogo font-bold '>Hello there 👋🏾, I'm </p>
                    <h1 className='text-[2.000rem] text-white font-extrabold font-sans md:text-[5.052rem]'>Dunia Dunia</h1>
                    <p>I'm a big believer in technology as a key to easing every aspect of the human activities through scalable softwares, well designed and utility based. Let's build something together!</p>
                    <button className='px-3 w-50 mx-auto border-2 border-fromLogo p-2 rounded-lg transition-all duration-500 text-fromLogo hover:bg-lightButton hover:text-fromLogo hover:transition-all hover:duration-500'>
                        <a href='https://api.whatsapp.com/send?phone=256788306651&text=Thanks%20for%20contacting'>
                            Let's Connect
                        </a>
                    </button>
                </div>
        </motion.div>
    );
}

export default Presentation;
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation ,motion } from 'framer-motion';
import ProjectItem from '../../components/ProjectItem/projectItem';

import foodApp from '../../images/foodApp.png';
import phonesApp from '../../images/phonesApp.png';
import movie from '../../images/movie.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faCircleDot } from '@fortawesome/free-solid-svg-icons';

function Projects(props) {
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

    let items = [
        {title: 'Food Delivery App', description: 'The food delivery app here mainly focuses on providing the possibity for a user to view a certain number of articles from a remote restaurant and add them to a cart and launch the parchase. Then it also provides an admin side for orders processing and new items addition', stacks: <p className='text-lg text-fromLogo mt-7 md:text-2xl'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/> Firebase <FontAwesomeIcon icon={faCircleDot}/></p>, image: foodApp, link: 'https://e-commerce-food-app-delta.vercel.app/' },

        {title: 'Phones Shopping App', description: 'The Phones Shopping App provides a UI that allows a user to choose a phone they would like to uy, view all the details about the phone for better decision making, adding the articles to the cart and in the end be able to send the order.', stacks: <p className='text-lg text-fromLogo mt-7 md:text-2xl'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/> Firebase <FontAwesomeIcon icon={faCircleDot}/></p>, image: phonesApp, link: 'https://phones-shopping-app.vercel.app/' },

        {title: 'Movies App', description: 'The Movies App is a ainly static App for now which provides a nice view to users to see the a serie announce band and the episodes the serie has. There are future woks on this one.', stacks: <p className='text-lg text-fromLogo mt-7 md:text-2xl'>HTML <FontAwesomeIcon icon={faCircleDot}/> CSS <FontAwesomeIcon icon={faCircleDot}/> TailwindCSS <FontAwesomeIcon icon={faCircleDot}/> ReactJs <FontAwesomeIcon icon={faCircleDot}/></p>, image: movie, link: 'https://movies-dsplay-app.vercel.app/' },
    ]


    return (
        <div id='projects' className='container mx-auto mt-60'>
            <motion.h1 ref={ref} animate={animate} className='text-2xl font-bold text-center mt-10 md:text-3xl'>My Projects 
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
                <FontAwesomeIcon icon={faAsterisk} className='text-fromLogo mx-1 md:mx-2'/>
            </motion.h1>

                <div className='my-10 flex flex-col lg:flex-row lg:justify-evenly'>
                    {items.map(el => {
                        return <ProjectItem title={el.title} description={el.description} stacks={el.stacks} image={el.image} link={el.link} key={Math.random()}/>
                    })}
                </div>           
        </div>
    );
}

export default Projects;
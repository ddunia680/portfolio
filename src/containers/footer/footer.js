import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function footer(props) {
    return (
        <footer className='container pb-10 text-sm mx-auto mt-60 flex flex-col-reverse md:flex-row md:justify-between'>
            <div className='flex flex-col space-y-5 py-5 w-90 text-center md:text-left md:w-[40%]'>
                <div className='flex flex-col text-center md:text-left md:flex-row md:justify-between'>
                    <h5><FontAwesomeIcon icon={faLocationDot} /> Kampala, Uganda</h5>
                    <h5><FontAwesomeIcon icon={faPhone} /> +256 788 306 651     +256 779 364 053</h5>
                </div>
                <p><span className='text-fromLogo'>Dunia Dunia</span> &copy;2022 All rights reserved.</p>
            </div>

            <h3 className='text-2xl text-center md:text-left'><a href='https://github.com/ddunia680'><FontAwesomeIcon icon={faGithub}/></a> <a href='https://twitter.com/Dunia_Dunia5'><FontAwesomeIcon icon={faTwitter}/></a>  <a href='https://www.linkedin.com/in/dunia-dunia-86750b256/'><FontAwesomeIcon icon={faLinkedin}/></a>  <a href='https://www.instagram.com/dunia_dunia5/'><FontAwesomeIcon icon={faInstagram}/></a></h3>
            
        </footer>
    );
}

export default footer;
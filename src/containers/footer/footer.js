import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function Footer(props) {
    const { t } = useTranslation();

    const changeLanguage = (e) => {
        i18next.changeLanguage(e.target.value);
    }
    return (
        <footer id='footer' className='container pb-10 text-sm mx-auto mt-60 flex flex-col-reverse md:flex-row md:justify-between'>
            <div className='flex flex-col space-y-5 py-5 w-90 text-center md:text-left md:w-[40%]'>
                <div className='flex flex-col text-center md:text-left md:flex-row md:justify-between'>
                    <h5><FontAwesomeIcon icon={faLocationDot} />{t('country')}</h5>
                    <h5><FontAwesomeIcon icon={faPhone} /> +256 788 306 651     +256 779 364 053</h5>
                </div>
                <p><span className='text-fromLogo'>Dunia Dunia</span> &copy;2023 All rights reserved.</p>
            </div>

            <div className='flex flex-col justify-center items-center space-y-4'>
                <h3 className='text-2xl text-center md:text-left'><a href='https://github.com/ddunia680' target='blank' className='transition-all duration-500 text-violet dark:text-darkLighterBlue hover:text-darkLighterBlue dark:hover:text-white hover:transition-all hover:duration-500'><FontAwesomeIcon icon={faGithub}/></a> <a href='https://twitter.com/Dunia_Dunia5' target='blank' className='transition-all duration-500 text-violet dark:text-darkLighterBlue hover:text-darkLighterBlue dark:hover:text-white hover:transition-all hover:duration-500'><FontAwesomeIcon icon={faTwitter}/></a>  <a href='https://www.linkedin.com/in/dunia-dunia-691961288/' target='blank' className='transition-all duration-500 text-violet dark:text-darkLighterBlue hover:text-darkLighterBlue dark:hover:text-white hover:transition-all hover:duration-500'><FontAwesomeIcon icon={faLinkedin}/></a>  <a href='https://www.instagram.com/duniadunia18/' target='blank' className='transition-all duration-500 text-violet dark:text-darkLighterBlue hover:text-darkLighterBlue dark:hover:text-white hover:transition-all hover:duration-500'><FontAwesomeIcon icon={faInstagram}/></a></h3>
                <select className='bg-black bg-opacity-40 focus:outline-none px-3 rounded-full' onChange={(e) => changeLanguage(e)}>
                    <option value='en'>English</option>
                    <option value='fr'>French</option>
                </select>
            </div>
        </footer>
    );
}

export default Footer;
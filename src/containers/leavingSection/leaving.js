import React from 'react';
import { useTranslation } from 'react-i18next';

function Leaving(props) {
    const { t } = useTranslation();
    return (
        <div className='mt-60'>
            <h3 className=' text-center text-darkLighterBlue dark:text-gray-300 text-md font-bold md:text-2xl'>{t('letsBuild')}</h3>
            <h1 className='text-center text-2xl font-extrabold text-fromLogo my-5 md:text-5xl'>ddunia680@gmail.com</h1>
        </div>
    );
}

export default Leaving;
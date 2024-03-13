import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { IoIosPin, IoMdCall, IoLogoGithub, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io';

export default function Footer() {
    const { t } = useTranslation();

    const languageChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        changeLanguage(e.target.value);
    }

  return (
    <div className='w-full h-[10rem] flex justify-center items-center shadow-gray-300 dark:shadow-headerColor1 shadow-inner my-[2rem] md:my-0'>
        <div className='w-full h-full md:w-[80%] px-[1rem] md:px-0 flex flex-col-reverse md:flex-row justify-between items-center'>
            <div className=' w-full h-[50%] md:h-full md:w-[40%] flex flex-col justify-evenly items-start space-y-[0.5rem]'>
                <div className='w-full flex flex-col md:flex-row space-y-[0.5rem] md:space-y-0 justify-between items-center text-headerColor2 
                font-semibold dark:font-normal dark:text-slate-300 tracking-widest text-[13px] md:text-[16px]'>
                    <p className='flex justify-start items-center'> <IoIosPin size={20} className='text-blue-500' /> {t('place')} </p>
                    <p className='flex justify-start items-center'> <IoMdCall size={20} className='text-blue-500' />  +256 779 364 053 </p>
                </div>
                <p className='text-headerColor2 text-[13px] md:text-[16px] dark:font-normal font-semibold dark:text-slate-300 tracking-widest'>
                    <span className='text-[#f80054] font-semibold'>Dunia Dunia</span> &copy; 2024, All Rights Reserved</p>
            </div>

            <div className=' w-[80%] h-[50%] md:h-full md:w-[30%] flex flex-col justify-evenly items-center md:items-end'>
                <div className='w-[70%] flex justify-between items-center text-headerColor2 dark:text-white'>
                    <a target='blank' href='https://github.com/ddunia680'><IoLogoGithub size={27} className='hover:text-black hover:scale-125 dark:hover:text-fromLogo hover:duration-150 duration-150'/></a>
                    <a target='blank' href='https://twitter.com/Dunia_Dunia5'><IoLogoTwitter size={27} className='hover:text-black hover:scale-125 dark:hover:text-fromLogo hover:duration-150 duration-150' /></a>
                    <a target='blank' href='https://www.linkedin.com/in/dunia-dunia-691961288/'><IoLogoLinkedin size={27} className='hover:text-black hover:scale-125 dark:hover:text-fromLogo hover:duration-150 duration-150' /></a>
                    <a target='blank' href='https://www.instagram.com/duniadunia18/'><IoLogoInstagram size={27} className='hover:text-black hover:scale-125 dark:hover:text-fromLogo hover:duration-150 duration-150' /></a>
                </div>
                <select className='bg-headerColor2 rounded-xl text-white px-[0.5rem] text-[13px] md:text-[16px]' onChange={e => languageChangeHandler(e)}>
                    <option value='en'>English</option>
                    <option value='fr'>French</option>
                </select>
            </div>
        </div>
    </div>
  )
}

import { Trans, useTranslation } from 'react-i18next';
import ClockLoader from "react-spinners/ClockLoader";
import ConnectB from '../ConnectButton/connectB';

export default function Contact() {
    const { t } = useTranslation(); 
  return (
    <div className='w-[90%] md:w-[80%] flex flex-col justify-between items-center gap-2 px-[2rem] my-[2rem]'>
        <h2 
            className='md:self-start text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r
            from-fromLogo to-[#960556] flex justify-start items-start gap-2 md:mb-[2rem] 
            drop-shadow-lg my-[2rem]'>
                {t('contactMe')} 
                <ClockLoader 
                    color={"#042143"}
                    loading={true}
                    size={40}
                    aria-label="About section"
                    data-testid="loader"
                />
        </h2>
        <div className='w-full flex flex-col justify-center items-start gap-[2rem]' >
            <p className='w-full md:w-[60%] text-headerColor1 dark:text-blue-200 font-semibold dark:font-normal'>
                <Trans components={{ b: <strong/> }} >{t('contactText')}</Trans>
            </p>
            <p className='w-[60%] text-headerColor1 dark:text-blue-200 font-semibold dark:font-normal'>
                <Trans components={{ 
                    span: <span className='text-fromLogo underline'/>, 
                    a: <a href='#connectB' className='block md:hidden text-blue-500 underline'/> }} 
                >{t('contactText2')}</Trans>
            </p>
            <div className='hidden md:block'><ConnectB/></div>
        </div>
    </div>
  )
}

import { useTranslation } from 'react-i18next'

export default function ConnectB() {
const { t } = useTranslation();

  return (
    <button id='connectB' className='confirmB relative bg-headerColor2 w-[15rem] text-white hover:text-headerColor1 hover:font-semibold mt-[1rem] p-[1rem] 
    rounded-lg shadow-black shadow-md'>
      <a target='blank' href='https://api.whatsapp.com/send?phone=256779364053&text=Thanks%20for%20contacting'>
          {t('connect')}
      </a>
    </button>
  )
}

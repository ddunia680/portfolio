import { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Header from "./components/Header/header";
import Presentation from "./components/Presentation/presentation";
import i18next from "i18next";
import { initReactI18next } from 'react-i18next'

import enTranslation from "./i18next/locales/enTranslation";
import frTranslation from "./i18next/locales/frTranslation";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

const translationEn = enTranslation;
const translationFr = frTranslation;

i18next.use(initReactI18next)
.init({
  resources: {
    en: { translation: translationEn },
    fr: { translation: translationFr }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})


type dropValue = boolean;

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [loaderSize, setLoaderSize] = useState<number>(70)
  const [dropIsOpen, setDropIsOpen] = useState(false);
  const [windowSize] = useState(window.innerWidth);

  useEffect(() => {
    if(windowSize < 700) {
      setLoaderSize(40)
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 800);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeDropState = (val: dropValue) => {
    setDropIsOpen(val)
}

  return (
    <div className="w-[100vw] h-[100vh]">
      { loading ? 
        <div className="w-full h-full flex justify-center items-center bg-gray-800">
          <DotLoader
            color={"#1869d2e1"}
            loading={loading}
            size={loaderSize}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      : 
        <div className="w-100 h-100 bg-white dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-headerColor1 
        dark:duration-150 duration-150 flex flex-col justify-start items-center">
          <Header dropState={dropIsOpen} changeDropState={changeDropState}/>
          <Presentation />
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      }

    </div>
  )
}

export default App

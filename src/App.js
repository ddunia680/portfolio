import Header from "./containers/Header/header";
import Presentation from "./containers/Presentation/presentation";
import About from "./containers/aboutSection/about";
import Projects from "./containers/projects/projects";
import Leaving from "./containers/leavingSection/leaving";
import Footer from "./containers/footer/footer";
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './utility/enTranslation';
import frTranslation from './utility/frTranslation';

const translationsEn = enTranslation;
const translationsFr = frTranslation;

i18next.use(initReactI18next)
.init({
  resources: {
    en: { translation: translationsEn },
    fr: { translation: translationsFr },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});
function App() {

  return (
      <div className="App bg-gradient-to-br from-lightBg1 via-lightBg1 to-lightBg2 dark:from-darkLighterBlue dark:via-darkLighterBlue dark:to-violet dark:text-white lg:text-lg duration-75">
        <Header/>
        <Presentation/>
        <About/>
        <Projects/>
        <Leaving/>
        <Footer/>
      </div>
  );
}

export default App;

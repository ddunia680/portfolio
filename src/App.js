import Header from "./containers/Header/header";
import Presentation from "./containers/Presentation/presentation";
import About from "./containers/aboutSection/about";
import Projects from "./containers/projects/projects";
import Leaving from "./containers/leavingSection/leaving";
import Footer from "./containers/footer/footer";

function App() {
  return (
    <div className="App bg-darkLighterBlue text-white lg:text-lg">
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

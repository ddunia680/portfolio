import Header from "./containers/Header/header";
import Presentation from "./containers/Presentation/presentation";
import About from "./containers/aboutSection/about";

function App() {
  return (
    <div className="App bg-darkLighterBlue text-white lg:text-lg">
      <Header/>
      <Presentation/>
      <About/>
    </div>
  );
}

export default App;

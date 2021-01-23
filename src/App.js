import logo from './logo.svg';
import './App.css';
import Contacts from './footer/Contacts';
import Menu from './header/Menu';
import AboutMe from './main/AboutMe';
import Slide from './header/Slide';
import Projects from './main/Projects';
import Skills from './main/Skills';

function App() {
  return (
    <div className="App">
      <Menu />
      <Slide />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts/>
    </div>
  );
}

export default App;

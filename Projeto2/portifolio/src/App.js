import './App.css';
import Header from './components/Header';
import Person from './components/Person';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Foot from './components/Foot';

function App() {
  return (
    <div className="App">
      <Header/>
      <Person/>
      <About/>
      <Projects/>
      <Contacts/>
      <Foot/>
    </div>
  );
}

export default App;

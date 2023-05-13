import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Portfolio from './components/Portfolio'
import Skills from './components/Skills';
import Contacto from './components/Contacto';

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contacto/>
    </>
  )
}

export default App

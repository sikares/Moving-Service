import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import NavScrollExample from './components/Navbar';
import Main from './components/Main';
import Features from './components/Features';
import ImagesControlled from './components/ImagesControlled';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}>
      <Container >
        <NavScrollExample darkMode={darkMode} toggleMode={toggleMode} />
        <Main darkMode={darkMode} />
        <Features darkMode={darkMode} />
        <ImagesControlled />
        <Footer darkMode={darkMode} />
      </Container>
    </div>
  );
}

export default App;
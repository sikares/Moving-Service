import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './components/Main';
import Features from './components/Features';
import ImagesControlled from './components/ImagesControlled';
import Container from 'react-bootstrap/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <App />
      <Main />
      <Features />
      <ImagesControlled />
    </Container>
  </React.StrictMode>
);
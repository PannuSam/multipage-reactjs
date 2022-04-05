import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './component/Card';
import Footer from './component/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Card />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


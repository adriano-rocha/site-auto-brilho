import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  duration: 1000,        
  once: true,            
  offset: 100,           
  easing: 'ease-in-out', 
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
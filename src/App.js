import './App.css';

/* Imports do React */
import React, { useState, useEffect } from 'react';

//IMPORTS DAS PÁGINAS
import HomePage from './components/componentsWeb/homepage'
import HomepageMobile from './components/componentsMobile/homepageMobile'

function App() {

    //CÓDIGO PARA DETECTAR SE É MOBILE
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      
      const handleResize = (e) => {
        setIsMobile(e.matches);
      };

      mediaQuery.addListener(handleResize);

      return () => {
        mediaQuery.removeListener(handleResize);
      };
    }, []);

    return (
      <div>
      {isMobile ? <HomepageMobile /> : <HomePage />}
      </div>
    );
}

export default App;

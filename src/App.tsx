import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Views/LandingPage/LandingPage';
import theme from './Theme/theme';

const App: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(
    localStorage.getItem('theme') === 'light' || null ? true : false
  );

  useEffect(() => {}, [isLightMode]);

  function switchTheme() {
    localStorage.setItem('theme', isLightMode ? 'dark' : 'light');
    setIsLightMode(!isLightMode);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header isLightMode={isLightMode} onClick={() => switchTheme()} />
          <Navbar />
          <LandingPage />
        </>
      ),
      children: [
        {
          index: true,
          path: 'nyheter',
          element: <h1>Nyheter</h1>,
        },
        {
          path: 'produkter',
          element: <h1>Produkter</h1>,
        },
        {
          path: 'om-oss',
          element: <h1>Om oss</h1>,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme[isLightMode ? 'light' : 'dark']}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;

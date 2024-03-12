import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import About from './Views/About/About';
import GlobalStyle from './Components/GlobalStyle/GlobalStyle';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import News from './Views/News/News';
import Products from './Views/Products/Products';
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
          <Header
            isLightMode={isLightMode}
            onClickThemeChange={() => switchTheme()}
            onClickCart={() => {}}
          />
          <Navbar />
          <LandingPage />
        </>
      ),
      children: [
        {
          index: true,
          path: 'nyheter',
          element: <News />,
        },
        {
          path: 'produkter',
          element: <Products />,
        },
        {
          path: 'om-oss',
          element: <About />,
        },
      ],
    },
    {
      path: '*',
    },
  ]);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme[isLightMode ? 'light' : 'dark']}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;

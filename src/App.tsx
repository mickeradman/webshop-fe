import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import About from './Views/About/About';
import { GlobalStyle } from './Components/GlobalStyle/GlobalStyle';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import News from './Views/News/News';
import Products from './Views/Products/Products';
import ShoppingCart from './Views/ShoppingCart/ShoppingCart';
import theme from './Theme/theme';

const App: React.FC = () => {
  // const mobileThreshold = 700;
  // const [isMobile, setIsMobile] = useState(
  //   window.innerWidth < mobileThreshold ? true : false
  // );
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [isLightMode, setIsLightMode] = useState(
    localStorage.getItem('theme') === 'light' || null ? true : false
  );

  useEffect(() => {
    showShoppingCart
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isLightMode, showShoppingCart]);

  function switchTheme() {
    localStorage.setItem('theme', isLightMode ? 'dark' : 'light');
    setIsLightMode(!isLightMode);
  }

  const onClickCart = () => {
    setShowShoppingCart(!showShoppingCart);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header
            isLightMode={isLightMode}
            onClickThemeChange={() => switchTheme()}
            onClickCart={() => onClickCart()}
          />
          <Navbar />
          <LandingPage />
          {showShoppingCart ? (
            <ShoppingCart
              isOpen={showShoppingCart}
              onClose={() => setShowShoppingCart(false)}
            />
          ) : null}
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

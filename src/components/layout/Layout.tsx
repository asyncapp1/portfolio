import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import GlobalStyles from '../../styles/GlobalStyles';
import theme from '../../styles/theme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout; 
import React from 'react';

import Header from '../components/Header';
import SoundContextProvider from '../components/SoundContextProvider';
import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundContextProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </SoundContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;

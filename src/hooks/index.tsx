import React from 'react';

// import { AuthProvider } from './auth';
// import { ToastProvider } from './toast';
import { FontSizeProvider } from './fontSize';
import { DarkModeProvider } from './darkMode';

const AppProvider: React.FC = ({ children }) => (
  // <AuthProvider>
  <FontSizeProvider>
    <DarkModeProvider>
      {/* <ToastProvider> */}
      {children}
      {/* </ToastProvider> */}
    </DarkModeProvider>
  </FontSizeProvider>
  // </AuthProvider>
);

export default AppProvider;

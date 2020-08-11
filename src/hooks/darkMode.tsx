import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

interface DarkModeContextData {
  darkMode: string;
  toggleDarkMode(): void;
}

const DarkModeContext = createContext<DarkModeContextData>(
  {} as DarkModeContextData,
);

export const DarkModeProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const mode = localStorage.getItem('@PortalTCE:darkMode');

    if (mode) {
      return mode;
    }

    localStorage.setItem('@PortalTCE:darkMode', 'off');
    return 'off';
  });

  const toggleDarkMode = useCallback(() => {
    darkMode === 'off' ? setDarkMode('on') : setDarkMode('off');
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('@PortalTCE:darkMode', darkMode);
  }, [darkMode]);

  useHotkeys('alt+4', () => {
    darkMode === 'off' ? setDarkMode('on') : setDarkMode('off');
  });

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}
    >
      <div className={darkMode === 'on' ? 'bg-black-apoio' : 'bg-white'}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

export function useDarkMode(): DarkModeContextData {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('useDarkMode must be used within an DarkModeProvider');
  }

  return context;
}

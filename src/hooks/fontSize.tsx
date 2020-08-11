import React, { createContext, useState, useCallback, useContext } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

interface FontSizeContextData {
  fontSize: number;
  increaseFontSize(): void;
  decreaseFontSize(): void;
  normalizeFontSize(): void;
}

const FontSizeContext = createContext<FontSizeContextData>(
  {} as FontSizeContextData,
);

export const FontSizeProvider: React.FC = ({ children }) => {
  const [fontSize, setFontSize] = useState(1);

  const increaseFontSize = useCallback(() => {
    setFontSize(fontSize + 0.1);
  }, [fontSize]);

  const decreaseFontSize = useCallback(() => {
    setFontSize(fontSize - 0.1);
  }, [fontSize]);

  const normalizeFontSize = useCallback(() => {
    setFontSize(1);
  }, []);

  useHotkeys('alt+1', () => setFontSize((size) => size + 0.1));
  useHotkeys('alt+2', () => setFontSize(1));
  useHotkeys('alt+3', () => setFontSize((size) => size - 0.1));

  return (
    <FontSizeContext.Provider
      value={{
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        normalizeFontSize,
      }}
    >
      <div style={{ fontSize: `${fontSize}rem` }}>{children}</div>
    </FontSizeContext.Provider>
  );
};

export function useFontSize(): FontSizeContextData {
  const context = useContext(FontSizeContext);

  if (!context) {
    throw new Error('useFontSize must be used within an FontSizeProvider');
  }

  return context;
}

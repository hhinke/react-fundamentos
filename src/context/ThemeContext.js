import React, { useState, createContext } from 'react';

export const ThemeContext = createContext('dark');

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  function handleTogleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: handleTogleTheme }} >
      {props.children}
    </ThemeContext.Provider>
  )
}
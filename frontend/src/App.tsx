import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import Home from './Home';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#490089',
      light: '#bdc8f0',
    },
    secondary: {
      main: '#bdc8f0',
      light: '#3d5afe',
    },
    neutral: {
      main: '#fff',
      contrastText: '#64748B',
    },
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;

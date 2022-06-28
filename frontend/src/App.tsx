import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Services from './components/Services';
import Home from './Home';
import Galery from './shared/Galery';
import Portfolio from './shared/Portfolio';

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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/galery' element={<Galery />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

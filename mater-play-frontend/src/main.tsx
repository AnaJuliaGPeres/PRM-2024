import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as BrownserRouter } from 'react-router-dom'


const darkTheme = createTheme( {
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',  
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrownserRouter>
      <App />
      </BrownserRouter>
      <App />
    </ThemeProvider>
    <App />
  </React.StrictMode>
)

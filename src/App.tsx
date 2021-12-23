import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './global/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

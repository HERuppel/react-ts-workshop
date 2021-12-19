import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './global/theme';
import Provider from './hooks';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider>
          <AppRoutes />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

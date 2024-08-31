// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#d32f2f', // Red
    },
    background: {
      default: '#f4f4f4',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h2: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 300,
    },
  },
});

export default theme;


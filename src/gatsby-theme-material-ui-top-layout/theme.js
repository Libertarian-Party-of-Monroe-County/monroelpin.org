import { createTheme } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      dark: grey[500],
      light: grey[200]
    },
    secondary: {
      main: yellow[700],
      dark: yellow[900],
      light: yellow[100]
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontWeight: 900,
      fontSize: '4.5rem'
    },
    h2: {
      fontWeight: 700
    },
    h3: {
      fontWeight: 700
    }
  }
});

export default theme;

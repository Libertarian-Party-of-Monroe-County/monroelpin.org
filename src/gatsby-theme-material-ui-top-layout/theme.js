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
      main: yellow[500],
      dark: yellow[900],
      light: yellow[100]
    }
  }
});

export default theme;

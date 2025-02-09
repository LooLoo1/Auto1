import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    text: {
      primary: '#4A4A4A', 
    },
    primary: {
      main: '#EA7F28', 
    },
    secondary: {
      main: '#D37324', 
    },
  },
});

export default theme;
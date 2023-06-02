import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

export const dark = createTheme({
  
  palette: {
    mode:"dark",
    primary: blue,
    background: {
      default: '#181818', // replace with your desired background color
      paper:'#181818'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
       dark:'#222'
    },
    
 

  },
  
});
export const light = createTheme({
  
    
  palette: {
    primary:blue,
    background: {
      default: '#EEEEEE', // replace with your desired background color
      paper:'#fff',
     
    },

  },
});

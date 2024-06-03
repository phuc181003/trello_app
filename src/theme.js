import { red } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'


// Create a theme instance.
const theme = extendTheme({
  trelloCumtom: {
    appBarHeight: '48px',
    appBoardHeight: '58px'
  },
  colorSchemes: {
    light: { // palette for light mode
      palette: {
        primary: {
          main: '#fff9c4',
          light: '#fafafa',
          dark: '#d7ccc8',
          contrastText: '#fff'
        },
        secondary: {
          main: '#19857b'
        },
        error: {
          main: red.A400
        }
      }
    },
    dark: { // palette for dark mode
      palette: {
        primary: {
          light: '#ec407a',
          main: '#212121'
        },
        secondary: {
          main: '#19857b'
        },
        error: {
          main: red.A400
        }
      }
    }
  }
  // palette: {

  //   mode: 'dark',

  //   primary: {
  //     main: '#ba68c8'
  //   },
  //   secondary: {
  //     main: '#19857b'
  //   },
  //   error: {
  //     main: red.A400
  //   }
  // }
})

export default theme
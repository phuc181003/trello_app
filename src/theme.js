import { red } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'


// Create a theme instance.
const theme = extendTheme({
  trelloCumtom: {
    appBarHeight: '50px',
    appBoardHeight: '58px'
  },
  colorSchemes: {
    light: { // palette for light mode
      palette: {
        primary: {
          main: '#fff',
          light: '#fca311',
          dark: '#FFC0CB',
          bg: ' #F64A8A',
          specialColor: '#E52B50',
          container: '#FFE4E1',
          contrastText: '#fff'
        },
        secondary: {
          main: '#f50057'
        },
        error: {
          main: red.A400
        }
      }
    },
    dark: { // palette for dark mode
      palette: {
        primary: {
          light: '#C9A0DC',
          dark: '#1F305E',
          main: '#EEEEEE',
          specialColor: '#E52B50',
          container: '#111111',
          bg: '#1E2952',
          contrastText: '#fff'
        },
        secondary: {
          main: '#D71868'
        },
        error: {
          main: red.A400
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#f50057',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'black',
            borderRadius: '8px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.contrastText,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.contrastText,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.contrastText
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.contrastText
            }
          },
          '& fieldset': {
            borderWidth: '0.5px !important'
          },
          '&:hover fieldset': {
            borderWidth: '1px !important'
          }

        })
      }
    }
  }
})

export default theme
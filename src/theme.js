import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// red #e64a19
// light blue #e6eeef
// light pink #eb928a

let theme = createMuiTheme({
  palette: {
    // add palette
    primary: {
      light: '#7de1ee',
      main: '#46afbc',
      dark: '#007f8c',
      contrastText: '#fff'
    },
    secondary: {
      light: '#c68400',
      main: '#ffb300',
      dark: '#c68400',
      contrastText: '#fff'
    }
  },
  overrides: {
    // add overries
    MuiTab: {
      root: {
        minWidth: 120
      }
    },
    MuiSnackbarContent: {
      root: {
        justifyContent: 'center'
      }
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
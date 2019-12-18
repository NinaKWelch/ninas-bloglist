import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
// Material UI CssBaseline kickstart an elegant, consistent,
// and simple baseline to build upon.
import CssBaseline from '@material-ui/core/CssBaseline'
import store from './store'
import App from './App'
import theme from './theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

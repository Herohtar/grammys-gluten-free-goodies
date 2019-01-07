import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// Your top level component
import App from './App'

import theme from './theme'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const muiTheme = createMuiTheme(theme)
  const render = Comp => {
    renderMethod(
      <AppContainer>
        <MuiThemeProvider theme={muiTheme}>
          <Comp />
        </MuiThemeProvider>
      </AppContainer>,
      document.getElementById('root'),
      () => {
        const jssStyles = document.getElementById('jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles)
        }
      }
    )
  }

  // Render!
  render(App)

  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default))
  }
}

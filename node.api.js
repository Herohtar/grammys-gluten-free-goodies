import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'
import { SheetsRegistry } from 'react-jss/lib/jss'

import theme from './src/theme'

export default () => ({
  beforeRenderToElement: (App, { meta }) => props => {
    meta.sheetsRegistry = new SheetsRegistry()

    const muiTheme = createMuiTheme(theme)
    const generateClassName = createGenerateClassName()
    const sheetsManager = new Map()

    return (
      <JssProvider registry={meta.sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={muiTheme} sheetsManager={sheetsManager}>
          <App {...props} />
        </MuiThemeProvider>
      </JssProvider>
    )
  },
  Head: ({ meta }) => (
    <React.Fragment>
      <style id="jss-server-side" dangerouslySetInnerHTML={{ __html: meta.sheetsRegistry.toString() }} />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </React.Fragment>
  )
})

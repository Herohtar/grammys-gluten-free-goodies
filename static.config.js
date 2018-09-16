import React from 'react'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'

import * as routes from './src/constants/routes'
import theme from './src/theme'

import siteConfig from './src/content/SiteConfig.json'
import homePage from './src/content/pages/HomePage.json'
import productsPage from './src/content/pages/ProductsPage.json'
import orderPage from './src/content/pages/OrderPage.json'
import imageCarousel from './src/content/ImageCarousel.json'
import faq from './src/content/Faq.json'
import products from './src/content/Products.json'

export default {
  siteRoot: siteConfig.url,
  getSiteData: () => (
    siteConfig
  ),
  getRoutes: async () => {
    return [
      {
        path: routes.HOME,
        component: 'src/containers/Home',
        getData: () => ({homePage, imageCarousel, faq}),
      },
      {
        path: routes.PRODUCTS,
        component: 'src/containers/Products',
        getData: () => ({productsPage, products}),
      },
      {
        path: routes.ORDER,
        component: 'src/containers/Order',
        getData: () => ({
          orderPage,
          productList: products.items.map((product, index) => ({
            id: `product${index}`,
            name: product.name,
          })),
        }),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheetsRegistry = new SheetsRegistry()
    const muiTheme = createMuiTheme(theme)
    const generateClassName = createGenerateClassName()
    const html = render(
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={muiTheme} sheetsManager={new Map()}>
          <Comp />
        </MuiThemeProvider>
      </JssProvider>
    )

    meta.jssStyles = sheetsRegistry.toString()

    return html
  },
  Document: class CustomHtml extends React.Component {
    render() {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />
            <script src="https://identity-js.netlify.com/v1/netlify-identity-widget.js" />
          </Head>
          <Body>
            {children}
            <style id="jss-server-side">{renderMeta.jssStyles}</style>
          </Body>
        </Html>
      )
    }
  },
}

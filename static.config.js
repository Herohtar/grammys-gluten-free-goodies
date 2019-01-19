import React from 'react'
//
import * as routes from './src/constants/routes'

import siteConfig from './src/content/SiteConfig.json'
import homePage from './src/content/pages/HomePage.json'
import productsPage from './src/content/pages/ProductsPage.json'
import orderPage from './src/content/pages/OrderPage.json'
import imageCarousel from './src/content/ImageCarousel.json'
import faq from './src/content/Faq.json'
import products from './src/content/Products.json'

export default {
  siteRoot: siteConfig.url,
  getSiteData: () => siteConfig,
  getRoutes: () => [
    {
      path: routes.HOME,
      getData: () => ({
        homePage,
        imageCarousel,
        faq,
      }),
    },
    {
      path: routes.PRODUCTS,
      getData: () => ({
        productsPage,
        products,
      }),
    },
    {
      path: routes.ORDER,
      getData: () => ({
        orderPage,
        productList: products.items.map((product, index) => ({
          id: `product${index}`,
          name: product.name,
        })),
      }),
    },
  ],
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <Body>
        {children}
      </Body>
    </Html>
  ),
}

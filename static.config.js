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
  getSiteData: () => (
    siteConfig
  ),
  getRoutes: async () => {
    return [
      {
        path: routes.HOME,
        getData: () => ({homePage, imageCarousel, faq}),
      },
      {
        path: routes.PRODUCTS,
        getData: () => ({productsPage, products}),
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
    ]
  },
}

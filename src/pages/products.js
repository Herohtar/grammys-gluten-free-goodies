import React from 'react'
import { Head, useSiteData, useRouteData } from 'react-static'
//
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import ProductCard from '../components/ProductCard'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '25px',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))

export default () => {
  const classes = useStyles()
  const { title } = useSiteData()
  const { productsPage, products } = useRouteData()
  return (
    <div>
      <Head title={`${productsPage.title} - ${title}`} />
      <Grid container spacing={3} className={classes.root}>
        {
          products.items.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} container>
              <ProductCard product={product} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

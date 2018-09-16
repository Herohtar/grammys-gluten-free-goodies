import React from 'react'
//
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const styles = theme => ({
  root: {
    background: theme.palette.background.product,
  },
  image: {
    height: '200px',
  },
  expand: {
    flex: '1 1 auto',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export default withStyles(styles)(({ classes, product }) => (
  <Card className={[classes.root, classes.expand, classes.flexColumn].join(' ')}>
    <CardMedia image={product.image} className={classes.image} />
    <CardHeader title={product.name} />
    <CardContent className={[classes.expand, classes.flexColumn].join(' ')}>
      <Typography variant="body1" className={classes.expand} paragraph>{product.description}</Typography>
      <Typography variant="body2">Price:</Typography>
      <Typography variant="body1">{product.price}</Typography>
    </CardContent>
  </Card>
))

import React from 'react'
//
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles(theme => ({
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
}))

export default ({ product }) => {
  const classes = useStyles()
  return (
    <Card className={[classes.root, classes.expand, classes.flexColumn].join(' ')}>
      <CardMedia image={product.image} className={classes.image} />
      <CardHeader title={product.name} />
      <CardContent className={[classes.expand, classes.flexColumn].join(' ')}>
        <Typography variant="body2" className={classes.expand} paragraph>{product.description}</Typography>
        <Typography variant="body1">Price:</Typography>
        <Typography variant="body2">{product.price}</Typography>
      </CardContent>
    </Card>
  )
}

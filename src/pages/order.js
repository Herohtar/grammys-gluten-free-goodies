import React from 'react'
import { Head, useSiteData, useRouteData } from 'react-static'
//
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ReactMarkdown from 'react-markdown'

const styles = theme => ({
  root: {
    //paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 4,
  },
})

export default withStyles(styles)(({ classes }) => {
  const { title } = useSiteData()
  const { orderPage } = useRouteData()
  return (
    <div className={classes.root}>
      <Head title={`${orderPage.title} - ${title}`} />
      <Grid container justify="center" style={{ paddingTop: '25px' }}>
        <Grid item xs={12} sm={10}>
          <Typography variant="h6" align="center"><ReactMarkdown source={orderPage.content} /></Typography>
        </Grid>
      </Grid>
    </div>
  )
})

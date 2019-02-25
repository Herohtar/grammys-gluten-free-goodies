import React from 'react'
import { SiteData, Head, withRouteData } from 'react-static'
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

class OrderPage extends React.Component {
  render() {
    const { classes, orderPage } = this.props

    return (
      <div className={classes.root}>
        <SiteData>
          {({ title }) => (
            <Head title={`${orderPage.title} - ${title}`} />
          )}
        </SiteData>
        <Grid container justify="center" style={{ paddingTop: '25px' }}>
          <Grid item xs={12} sm={10}>
            <Typography variant="h6" align="center"><ReactMarkdown source={orderPage.content} /></Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styledOrderPage = withStyles(styles)(OrderPage)

export default withRouteData(styledOrderPage)

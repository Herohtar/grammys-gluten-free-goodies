import React from 'react'
import { SiteData, Router, Route, Link, cleanPath } from 'react-static'
//
import Routes from 'react-static-routes'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import * as routes from './constants/routes'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 4,
    backgroundColor: '#42382f',
    backgroundImage: 'url(/uploads/background.png)',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  },
  header: {
    maxWidth: '100%',
  },
  content: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  footer: {
    paddingTop: theme.spacing.unit * 4,
    color: theme.palette.text.footer,
  }
})

class App extends React.PureComponent {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { classes } = this.props

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
            <SiteData render={({headerImage}) => (
              <Grid container justify="center" component="header">
                <Grid item xs="auto">
                  <img src={headerImage} className={classes.header} />
                </Grid>
              </Grid>
            )} />
          <Grid container justify="center">
            <Grid item xs={12} sm={11} md={9} lg={6}>
              <Paper className={classes.content}>
                <Route path="*" render={({ location }) => (
                  <Tabs value={cleanPath(location.pathname)} centered component="nav">
                    <Tab component={Link} value={cleanPath(routes.HOME)} exact to={routes.HOME} label="Home" />
                    <Tab component={Link} value={cleanPath(routes.PRODUCTS)} to={routes.PRODUCTS} label="Products" />
                    <Tab component={Link} value={cleanPath(routes.ORDER)} to={routes.ORDER} label="Order Form" />
                  </Tabs>
                )} />
                <Routes />
              </Paper>
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.footer} component="footer">
            <Grid item xs="auto">
              <Typography variant="caption" color="inherit">Powered by React Static and Netlify CMS</Typography>
            </Grid>
          </Grid>
        </div>
      </Router>
    )
  }
}

export default withStyles(styles)(App)

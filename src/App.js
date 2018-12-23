import React from 'react'
import { SiteData, Root, Routes } from 'react-static'
import { Router, Link } from '@reach/router'
//
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
    minHeight: '100vh',
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
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexGrow: {
    flexGrow: 1,
  },
})

const Nav = ({ location }) => (
  <Tabs value={location.pathname} centered component="nav">
    <Tab component={Link} value={routes.HOME} to={routes.HOME} label="Home" />
    <Tab component={Link} value={routes.PRODUCTS} to={routes.PRODUCTS} label="Products" />
    <Tab component={Link} value={routes.ORDER} to={routes.ORDER} label="Order Form" />
  </Tabs>
)

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
      <Root>
        <Grid container direction="column" justify="space-between" alignItems="center" className={classes.root}>
          <CssBaseline />
          <SiteData>
            {({headerImage}) => (
              <Grid item component="header" xs="auto">
                <img src={headerImage} className={classes.header} />
              </Grid>
            )}
          </SiteData>
          <Grid item container justify="center" component="main" className={classes.flexGrow}>
            <Grid item xs={12} sm={11} md={9} lg={6} className={classes.flexColumn}>
              <Paper className={[classes.content, classes.flexGrow].join(' ')}>
                <Router>
                  <Nav path="*" />
                </Router>
                <Routes />
              </Paper>
            </Grid>
          </Grid>
          <Grid item className={classes.footer} component="footer" xs="auto">
            <Typography variant="caption" color="inherit">Powered by React Static and Netlify CMS</Typography>
          </Grid>
        </Grid>
      </Root>
    )
  }
}

export default withStyles(styles)(App)

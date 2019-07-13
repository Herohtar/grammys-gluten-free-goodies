import React from 'react'
import { Root, Routes, useSiteData } from 'react-static'
//
import { makeStyles } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import NavigationTabs from './components/NavigationTabs'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
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
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  footer: {
    paddingTop: theme.spacing(4),
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

export default () => {
  const classes = useStyles()
  const { headerImage } = useSiteData()
  return (
    <Root>
      <Grid container direction="column" justify="space-between" alignItems="center" className={classes.root}>
        <CssBaseline />
        <Grid item component="header" xs="auto">
          <img src={headerImage} className={classes.header} />
        </Grid>
        <Grid item container justify="center" component="main" className={classes.flexGrow}>
          <Grid item xs={12} sm={11} md={9} lg={6} className={classes.flexColumn}>
            <Paper className={[classes.content, classes.flexGrow].join(' ')}>
              <NavigationTabs />
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

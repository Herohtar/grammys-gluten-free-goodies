import React from 'react'
import { SiteData, Head, withRouteData } from 'react-static'
//
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ReactMarkdown from 'react-markdown'
import OrderForm from '../components/OrderForm'
import Snackbar from '@material-ui/core/Snackbar'
import CircularProgress from '@material-ui/core/CircularProgress'
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone'

const styles = theme => ({
  root: {
    //paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 4,
  },
})

class OrderPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      submitting: false,
      submitted: false,
      error: false,
    }
  }

  handleClose = (event, reason) =>
  {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ error: false })
  }

  handleSubmit = async data => {
    this.setState({ submitting: true, error: false })

    console.log('Form submit was requested with the following data:')
    console.log(data)

    const orderUrl = `https://us-central1-grammys-gluten-free-goodies.cloudfunctions.net/orders/create`
    try {
      const response = await fetch(orderUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const json = await response.json()
        console.log(json)
        this.setState({ submitting: false, submitted: true })
      } else {
        throw response.statusText
      }
    } catch (e) {
      console.log(e)
      this.setState({ submitting: false, error: true })
    }
  }

  render() {
    const { classes, orderPage, productList } = this.props
    const { submitting, submitted, error } = this.state

    return (
      <div className={classes.root}>
        <SiteData render={({ title }) => (
          <Head title={`${orderPage.title} - ${title}`} />
        )} />
        <Grid container justify="center" style={{ paddingTop: '25px' }}>
          <Grid item xs={12} sm={10}>
            { submitted ?
              <Typography variant="title" align="center"><ReactMarkdown source={orderPage.successMessage} /></Typography>
              :
              <OrderForm productList={productList} onSubmit={this.handleSubmit} disabled={submitting} />
            }
          </Grid>
        </Grid>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} open={submitting} onClose={this.handleClose} message="Submitting order..." action={<CircularProgress style={{padding: '5px 5px 5px 5px'}} />} />
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} open={error} onClose={this.handleClose} autoHideDuration={5000} message="There was an error submitting your order, please try again later." action={<ErrorTwoToneIcon color="error" />} />
      </div>
    )
  }
}

const styledOrderPage = withStyles(styles)(OrderPage)

export default withRouteData(styledOrderPage)

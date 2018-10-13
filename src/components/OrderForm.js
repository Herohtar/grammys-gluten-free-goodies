import React from 'react'
//
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Paper from '@material-ui/core/Paper'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    background: theme.palette.background.form,
  },
  expander: {
    background: theme.palette.background.expander,
  },
})

class OrderForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      delivery: 'no',
      address: '',
    }

    props.productList.forEach(product => {
      this.state[product.id] = '0'
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      delivery: this.state.delivery,
      products: []
    }

    if (data.delivery === 'yes') {
      data.address = this.state.address
    }

    this.props.productList.forEach(({id, name}) => {
      const productAmount = this.state[id]
      if (productAmount && (productAmount !== '0')) {
        data.products.push({name: name, amount: productAmount})
      }
    })

    if (this.props.onSubmit) {
      this.props.onSubmit(data)
    }
  }

  render() {
    const { classes, productList, disabled } = this.props
    const { name, email, delivery, address } = this.state

    return (
      <Paper className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <Grid container direction="column" spacing={40}>
            <Grid item>
              <TextField name="name" label="Name" disabled={disabled} value={name} onChange={this.handleChange} required />
            </Grid>
            <Grid item>
              <TextField name="email" label="Email Address" disabled={disabled} value={email} onChange={this.handleChange} required />
            </Grid>
            <Grid item container spacing={40}>
              <Grid item xs={12} sm>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Do you want this order delivered?</FormLabel>
                  <RadioGroup name="delivery" value={delivery} onChange={this.handleChange}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes"  disabled={disabled} />
                    <FormControlLabel value="no" control={<Radio />} label="No"  disabled={disabled} />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {
                (delivery === 'yes') ? (
                  <Grid item xs={12} sm>
                    <TextField name="address" label="Delivery Address" value={address} onChange={this.handleChange} InputLabelProps={{shrink: true}} rows="2" placeholder={'123 Street Name\nCity, State 12345'} multiline required disabled={disabled} />
                  </Grid>
                ) : null
              }
            </Grid>
            <Grid item>
              {
                productList.map(({id, name}) => (
                  <ExpansionPanel key={id} className={classes.expander}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="subtitle1">{name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <TextField name={id} label="Amount" value={this.state[id]} onChange={this.handleChange} fullWidth disabled={disabled} />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                ))
              }
            </Grid>
            <Grid item align="right">
              <Button variant="contained" color="primary" type="submit" disabled={disabled}>Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(OrderForm)

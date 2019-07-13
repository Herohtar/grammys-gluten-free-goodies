import { createMuiTheme } from '@material-ui/core/styles'
import { brown, grey, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: brown,
    secondary: grey,
    error: orange,
    text: {
      footer: grey[50],
    },
    background: {
      paper: grey[50],
      product: brown[50],
      form: brown[50],
      expander: grey[100],
    },
  },
})

export default theme;

import React from 'react'
import { SiteData, Head } from 'react-static'
//
import Typography from '@material-ui/core/Typography'

export default () => (
  <div>
    <SiteData>
      {({ title }) => (
        <Head title={`Page not found - ${title}`} />
      )}
    </SiteData>
    <Typography variant="h5" align="center">
      404 - Oh no's! We couldn't find that page :(
    </Typography>
  </div>
)

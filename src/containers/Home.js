import React from 'react'
import { SiteData, RouteData, Head } from 'react-static'
//
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ReactMarkdown from 'react-markdown'
import Slider from 'react-slick'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
  },
  slider: {
    alignSelf: 'center',
    width: '80%',
    marginBottom: 60,
  }
})

const settings = {
  dots: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  fade: false
}

export default withStyles(styles)(({ classes }) => (
  <RouteData render={({ homePage, imageCarousel, faq }) => (
    <div className={classes.root}>
      <SiteData render={({ title }) => (
        <Head title={title} />
      )} />
      <Typography variant="subtitle1" align="center" component="div" paragraph><ReactMarkdown source={homePage.content} /></Typography>
      <Slider {...settings} className={classes.slider}>
        {
          imageCarousel.items.map((item, i) => (
            <div key={i}>
              <img src={item.image} style={{width: '100%'}} />
            </div>
          ))
        }
      </Slider>
      <Typography variant="h6" paragraph>Questions and Answers</Typography>
      {
        faq.items.map(({question, answer}, index) => (
          <div key={index}>
            <Typography variant="body1">{question}</Typography>
            <Typography variant="body2" paragraph>{answer}</Typography>
          </div>
        ))
      }
    </div>
  )} />
))

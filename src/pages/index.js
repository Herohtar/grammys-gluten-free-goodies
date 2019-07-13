import React from 'react'
import { Head, useSiteData, useRouteData } from 'react-static'
//
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ReactMarkdown from 'react-markdown'
import ImageGallery from 'react-image-gallery'

import 'react-image-gallery/styles/css/image-gallery.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  gallery: {
    alignSelf: 'center',
    width: '80%',
    marginBottom: 60,
  }
}))

const gallerySettings = {
  showPlayButton: false,
  autoPlay: true,
  slideDuration: 2000,
  slideInterval: 10000,
}

export default () => {
  const classes = useStyles()
  const { title } = useSiteData()
  const { homePage, imageCarousel, faq } = useRouteData()
  return (
    <div className={classes.root}>
      <Head title={title} />
      <Typography variant="body1" align="center" component={ReactMarkdown} source={homePage.content} paragraph />
      <ImageGallery {...gallerySettings} additionalClass={classes.gallery} items={imageCarousel.items.map(item => ({
        original: item.image,
        thumbnail: item.image,
        originalTitle: item.title,
        thumbnailTitle: item.title,
        originalAlt: item.title,
        thumbnailAlt: item.title,
        description: item.title
      }))} />
      <Typography variant="h5" paragraph>Questions and Answers</Typography>
      {
        faq.items.map(({question, answer}, index) => (
          <div key={index}>
            <Typography variant="h6">{question}</Typography>
            <Typography variant="body1" paragraph>{answer}</Typography>
          </div>
        ))
      }
    </div>
  )
}

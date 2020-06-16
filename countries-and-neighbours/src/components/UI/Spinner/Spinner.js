import React from 'react'

import './Spinner.scss'

const Spinner = (props) => {
  const classes = ['Spinner', props.theme ]
  return(
    <div className={classes.join(' ')}>Loading...</div>
  )
}

export default Spinner

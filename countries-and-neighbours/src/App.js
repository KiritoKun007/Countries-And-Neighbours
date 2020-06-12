import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import styles from './App.module.scss'

function App() {

  const [theme, settheme] = useState('LightMode')

  const changeThemeHandler = () => {
    if(theme === 'LightMode') {
      settheme('DarkMode')
    } else {
      settheme('LightMode')
    }
  }

  let classes = [styles.App, styles[theme]]

  return (
    <BrowserRouter>
      <div className={classes.join(' ')}>
        <Layout
          theme={theme}
          changeThemeHandler={changeThemeHandler} />
      </div>
    </BrowserRouter>
  )
}

export default App;

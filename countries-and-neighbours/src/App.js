import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import styles from './App.module.scss'
import { useEffect } from 'react';

function App() {

  const [theme, settheme] = useState('LightMode') 

  useEffect(() => {
    let localTheme = window.localStorage.getItem('theme')

    if(localTheme) {
      settheme(localTheme)
    }
  }, [])

  const changeThemeHandler = () => {
    if(theme === 'LightMode') {
      window.localStorage.setItem('theme', 'DarkMode')
      settheme('DarkMode')
    } else {
      window.localStorage.setItem('theme', 'LightMode')
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

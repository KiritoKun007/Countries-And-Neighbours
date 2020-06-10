import React, { useState } from 'react';

import Layout from './hoc/Layout/Layout';
import styles from './App.module.scss';

function App() {

  const [theme, settheme] = useState('LightMode')

  let classes = [styles.App, styles[theme]]

  return (
    <div className={classes.join(' ')}>
      <Layout>

      </Layout>
    </div>
  );
}

export default App;

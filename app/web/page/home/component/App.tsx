import React from 'react';

import styles from './App.module.less';
import { Switch, Route, Redirect } from 'react-router';

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <div className={styles.container}>Hello, world.</div>
      </Route>
      <Redirect path="*" to="/" />
    </Switch>
  );
}

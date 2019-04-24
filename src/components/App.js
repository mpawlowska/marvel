import React from 'react';
import styles from './App.module.scss';

export const App = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <p>
        Edit <div>src/App.js</div> and save to reload.
      </p>
      <div>Learn React</div>
    </header>
    <p className={styles.new}>Something new here</p>
  </div>
);

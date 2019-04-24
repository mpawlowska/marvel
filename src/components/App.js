import React from 'react';
import styles from './App.module.scss';

export const App = () => (
  <div className={styles.app}>
    <div className={styles.contentWrapper}>
      <header className={styles.appHeader}>Space-X</header>
      <main>Some content will be here</main>
    </div>
  </div>
);

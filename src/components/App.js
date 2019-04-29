import React from 'react';
import styles from './App.module.scss';
import Header from './Header/Header';
import CharacterList from './CharacterList/CharacterList';

export const App = () => (
  <div className={styles.app}>
    <div className={styles.contentWrapper}>
      <Header />
      <main>
        <CharacterList />
      </main>
    </div>
  </div>
);

import React from 'react';
import styles from './CharacterList.module.scss';
import CharacterItem from '../CharacterItem/CharacterItem';

const CharacterList = () => (
  <ul className={styles.characterList}>
    {[...new Array(14)].map((el, i) => (
      <CharacterItem key={i} />
    ))}
  </ul>
);

export default CharacterList;

import React from 'react';
import styles from './CharacterList.module.scss';
import { CHARACTERS_URL } from '../../constants/api';
import CharacterItem from '../CharacterItem/CharacterItem';
import useApi from '../../hooks/useApi';

const initialData = {
  data: {
    results: []
  }
};

const CharacterList = () => {
  const {
    data: {
      data: { results: characters = [] }
    },
    isLoading,
    isError
  } = useApi(CHARACTERS_URL, initialData);

  if (isError) {
    return <div>Something went wrong... Heros didn't arrive</div>;
  }
  if (isLoading) {
    return <div>Heros are arriving...</div>;
  }
  return characters.length === 0 ? (
    <div>No hero found</div>
  ) : (
    <ul className={styles.characterList}>
      {characters.map((character, i) => (
        <CharacterItem key={i} data={character} />
      ))}
    </ul>
  );
};

export default CharacterList;

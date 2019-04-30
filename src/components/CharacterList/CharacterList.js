import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CharacterList.module.scss';
import { API_KEY, CHARACTERS_URL } from '../../constants/api';
import CharacterItem from '../CharacterItem/CharacterItem';

const CharacterList = () => {
  const [characters, setCharacters] = useState([...new Array(14)]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { data = { results: [] } }
      } = await axios.get(CHARACTERS_URL, {
        params: {
          apikey: API_KEY
        }
      });
      setCharacters(data.results);
    };
    fetchData();
  }, []);

  return (
    <ul className={styles.characterList}>
      {characters.map((character, i) => (
        <CharacterItem key={i} data={character} />
      ))}
    </ul>
  );
};

export default CharacterList;

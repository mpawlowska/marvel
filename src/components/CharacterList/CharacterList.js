import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CharacterList.module.scss';
import { API_KEY, CHARACTERS_URL } from '../../constants/api';
import CharacterItem from '../CharacterItem/CharacterItem';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const {
          data: { data = { results: [] } }
        } = await axios.get(CHARACTERS_URL, {
          params: {
            apikey: API_KEY
          }
        });
        setCharacters(data.results);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      {isError && <div>Something went wrong... Heros didn't arrive</div>}
      {isLoading && <div>Heros are arriving...</div>}
      {!isLoading &&
        (characters.length === 0 ? (
          <div>No hero found</div>
        ) : (
          <ul className={styles.characterList}>
            {characters.map((character, i) => (
              <CharacterItem key={i} data={character} />
            ))}
          </ul>
        ))}
    </Fragment>
  );
};

export default CharacterList;

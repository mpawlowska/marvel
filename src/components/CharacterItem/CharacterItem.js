import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterItem.module.scss';

const CharacterItem = ({
  data: {
    thumbnail: { path, extension },
    name
  }
}) => {
  const characterImg = `${path}.${extension}`;

  return (
    <div className={styles.characterItem}>
      <img
        alt="Character"
        src={characterImg}
        className={styles.characterImage}
      />
      <p>{name}</p>
    </div>
  );
};

CharacterItem.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string
    }),
    name: PropTypes.string.isRequired
  })
};

CharacterItem.defaultProps = {
  data: {
    thumbnail: {
      path: '',
      extension: ''
    },
    name: ''
  }
};

export default CharacterItem;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterItem.module.scss';

const CharacterItem = ({ data: { name } }) => (
  <div className={styles.characterItem}>{name}</div>
);

CharacterItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

CharacterItem.defaultProps = {
  data: {
    name: ''
  }
};

export default CharacterItem;

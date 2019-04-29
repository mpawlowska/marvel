import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/Marvel-Comics-Logo.png';

const Header = () => (
  <header className={styles.appHeader}>
    <img src={logo} alt="Marvel logo" className={styles.appLogo} />
  </header>
);

export default Header;

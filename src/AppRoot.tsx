import React, { ReactElement } from 'react';
import { Minesweeper } from 'components/minesweeper';

import styles from './styles.scss';


export const AppRoot = (): ReactElement => (
  <div className={styles.wrapper}>
    <Minesweeper />
  </div>
);

import React, { ReactElement } from 'react';
import { useStore } from 'effector-react';
import { Store } from 'effector';

import { MatrixCellType } from 'types';
import styles from './styles.scss';


interface CellProps {
  $cellStore: Store<MatrixCellType>,
}

export const Cell = ({ $cellStore }: CellProps): ReactElement => {
  const { hasMine, minesAround } = useStore($cellStore);

  return (
    <div className={styles.root}>
      {!hasMine && minesAround}
      {hasMine && 'M!'}
    </div>
  );
};

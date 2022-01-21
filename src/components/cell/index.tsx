import React, { ReactElement } from 'react';
import { useStore } from 'effector-react';
import { Store } from 'effector';

import { MatrixCellType } from 'types';
import clsx from 'clsx';
import styles from './styles.scss';
import { cellOpened } from '../cellField/events';


interface CellProps {
  $cellStore: Store<MatrixCellType>,
}

export const Cell = ({ $cellStore }: CellProps): ReactElement => {
  const { hasMine, hasOpen, minesAround, coordinates } = useStore($cellStore);

  return (
    <button
      className={clsx(styles.root, hasOpen && styles.open)}
      type="button"
      onClick={hasOpen ? undefined : () => cellOpened({ ...coordinates })}
    >
      {!hasMine && minesAround}
      {hasMine && 'M!'}
    </button>
  );
};

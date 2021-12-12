import React, { ReactElement } from 'react';
import { useStore } from 'effector-react';
import { Store } from 'effector';

import { MatrixCellType } from 'utils/getMatrixCell';
// import styles from './styles.scss';


interface CellProps {
  $cellStore: Store<MatrixCellType>,
}

export const Cell = ({ $cellStore }: CellProps): ReactElement => {
  const cell = useStore($cellStore);
  return (
    <div>
      {`x: ${cell.coordinates[0]}, y: ${cell.coordinates[1]}`}
      <br />
      {cell.hasMine && 'Mine!'}
    </div>
  );
};

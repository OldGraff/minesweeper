/* eslint-disable react/no-array-index-key */
import React, { ReactElement } from 'react';
import { useStore } from 'effector-react';
import { $cellFieldStore } from './model';

import styles from './styles.scss';


export const CellField = (): ReactElement => {
  const cellField = useStore($cellFieldStore);
  return (
    <table className={styles.cellContainer}>
      {cellField.map(
        (row, rowI) => (
          <tr key={rowI}>
            {row.map(
              (cell, cellI) => <td key={`${rowI},${cellI}`}>{`${rowI},${cellI}`}</td>,
            )}
          </tr>
        ),
      )}
    </table>
  );
};

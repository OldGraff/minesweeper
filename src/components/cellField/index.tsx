/* eslint-disable react/no-array-index-key */
import React, { ReactElement } from 'react';
import { useStore } from 'effector-react';
import { $cellFieldStore } from './model';

import styles from './styles.scss';
import { Cell } from '../cell';


export const CellField = (): ReactElement => {
  const cellField = useStore($cellFieldStore);
  // console.log('CellField', cellField);
  return (
    <table className={styles.cellContainer}>
      {cellField.map(
        (row, rowI) => (
          <tr key={rowI}>
            {row.map(
              (cell, cellI) => (
                <td key={`${rowI},${cellI}`}>
                  <Cell $cellStore={cell} />
                </td>
              ),
            )}
          </tr>
        ),
      )}
    </table>
  );
};

import { Store } from 'effector';
import { getMatrixArray, MatrixArrayType } from './getMatrixArray';
import { getMatrixCell } from './getMatrixCell';
import { MatrixCellType } from '../types';


export type FieldType = MatrixArrayType<Store<MatrixCellType>>;

export const generateField = (rows = 10, columns?: number): FieldType => getMatrixArray<Store<MatrixCellType>>(
  getMatrixCell, rows, columns,
);

import { Store } from 'effector';
import { getMatrixArray, MatrixArrayType } from './getMatrixArray';
import { getMatrixCell, MatrixCellType } from './getMatrixCell';


export const generateField = (rows = 10, columns?: number): MatrixArrayType<Store<MatrixCellType>> => {
  console.log(rows);
  return getMatrixArray<Store<MatrixCellType>>(getMatrixCell, rows, columns);
};

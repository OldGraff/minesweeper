import { getMatrixArray, MatrixArrayType } from './getMatrixArray';


type CellType = Record<string, unknown>;

export const generateField = (rows = 10, columns?: number): MatrixArrayType<CellType> => {
  console.log(rows);
  return getMatrixArray<CellType>(() => ({}), rows, columns);
};

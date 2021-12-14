import { Store } from 'effector';
import { FieldType } from './generateField';
import { MatrixArrayType } from './getMatrixArray';
import { MatrixCellType } from '../types';
import { createCellStore } from '../components/cell/model';


export const storeToObject = (field: Store<FieldType>): MatrixArrayType<MatrixCellType> => {
  const fieldState = field.getState();
  return fieldState.map((row) => row.map((cell) => cell.getState()));
};

export const objectToStore = (field: MatrixArrayType<MatrixCellType>): FieldType => field.map(
  (row) => row.map((cell) => createCellStore(cell)),
);

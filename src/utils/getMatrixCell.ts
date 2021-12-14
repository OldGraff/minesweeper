import { Store } from 'effector';
import { MatrixCellType } from '../types';
import { createCellStore } from '../components/cell/model';


export const getMatrixCell = (x: number, y: number): Store<MatrixCellType> => createCellStore({
  hasMine: false,
  hasOpen: false,
  hasFlag: false,
  hasQuestion: false,
  minesAround: 0,
  coordinates: { x, y },
});

import { createStore, Store } from 'effector';
import { minePlanted } from '../components/cellField/events';
import { Coordinates } from '../types';


export type MatrixCellType = {
  hasMine: boolean,
  hasOpen: boolean,
  hasFlag: boolean,
  hasQuestion: boolean,
  minesAround: number,
  coordinates: [x: number, y: number],
};

const minePlantedReducer = (state: MatrixCellType, data: Coordinates): MatrixCellType => {
  const [x, y] = state.coordinates;
  if (data.x !== x || data.y !== y) return state;

  return { ...state, hasMine: true };
};

export const getMatrixCell = (x: number, y: number): Store<MatrixCellType> => createStore<MatrixCellType>({
  hasMine: false,
  hasOpen: false,
  hasFlag: false,
  hasQuestion: false,
  minesAround: 0,
  coordinates: [x, y],
}).on(minePlanted, minePlantedReducer);

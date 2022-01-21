import { createStore, Store } from 'effector';
import { Coordinates, MatrixCellType } from 'types';
import { isNearbyCell } from 'utils/isNearbyCell';
import { cellAutoOpened, cellOpened, minePlanted } from '../cellField/events';


const minePlantedReducer = (state: MatrixCellType, data: Coordinates): MatrixCellType => {
  const { x, y } = state.coordinates;
  const isNearby = isNearbyCell(state.coordinates, data);

  if (data.x !== x || data.y !== y) {
    return isNearby ? { ...state, minesAround: state.minesAround + 1 } : state;
  }

  return { ...state, hasMine: true };
};

const cellOpenedReducer = (state: MatrixCellType, data: Coordinates): MatrixCellType => {
  const { x, y } = state.coordinates;

  if (state.hasOpen || data.x !== x || data.y !== y) return state;

  return { ...state, hasOpen: true };
};

const cellAutoOpenedReducer = (state: MatrixCellType, data: Coordinates): MatrixCellType => {
  console.log('cellAutoOpened');
  const { x, y } = state.coordinates;

  if (state.hasOpen || state.hasMine || data.x !== x || data.y !== y) return state;

  return { ...state, hasOpen: true };
};


export const createCellStore = (cell: MatrixCellType): Store<MatrixCellType> => createStore<MatrixCellType>(cell)
  .on(minePlanted, minePlantedReducer)
  .on(cellOpened, cellOpenedReducer)
  .on(cellAutoOpened, cellAutoOpenedReducer);

import { createStore, Store } from 'effector';
import { Coordinates, MatrixCellType } from 'types';
import { isNearbyCell } from 'utils/isNearbyCell';
import { minePlanted } from '../cellField/events';


const minePlantedReducer = (state: MatrixCellType, data: Coordinates): MatrixCellType => {
  const { x, y } = state.coordinates;
  const isNearby = isNearbyCell(state.coordinates, data);

  if (data.x !== x || data.y !== y) {
    return isNearby ? { ...state, minesAround: state.minesAround + 1 } : state;
  }

  return { ...state, hasMine: true };
};


export const createCellStore = (cell: MatrixCellType): Store<MatrixCellType> => createStore<MatrixCellType>(cell)
  .on(minePlanted, minePlantedReducer);

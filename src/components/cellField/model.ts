import { createStore, sample, Store } from 'effector';
import { generateField } from 'utils/generateField';
import { getRandomInt } from 'utils/getRandomInt';
import { saveToLocalStorage, loadFromLocalStorage } from 'utils/localStorage';
import { objectToStore, storeToObject } from 'utils/store';
import { MatrixArrayType } from 'utils/getMatrixArray';
import { Coordinates, MatrixCellType } from 'types';
import { cellAutoOpened, cellOpened, minePlanted } from './events';


const MINES_COUNT = 10;
const FIELD_SIZE = 6;
const savedField = loadFromLocalStorage<MatrixArrayType<MatrixCellType>>('field');
const newField = savedField ? objectToStore(savedField) : generateField(FIELD_SIZE);

export const $cellFieldStore = createStore(newField);

const plantAllMines = (hasSaved: boolean) => {
  if (hasSaved) return;

  for (let i = MINES_COUNT; i !== 0;) {
    const cellField = $cellFieldStore.getState();
    const [x, y] = [getRandomInt(FIELD_SIZE), getRandomInt(FIELD_SIZE)];
    const isCellHasMine = cellField[x][y].getState().hasMine;

    if (!isCellHasMine) {
      minePlanted({ x, y });
      i -= 1;
    }
  }
  saveToLocalStorage(storeToObject($cellFieldStore));
};

plantAllMines(Boolean(savedField));

sample({
  clock: cellOpened,
  fn: (coordinates): Coordinates[] => {
    const { x, y } = coordinates;
    return [
      cellAutoOpened({ x: x - 1, y }),
      cellAutoOpened({ x: x + 1, y }),
      cellAutoOpened({ x, y: y - 1 }),
      cellAutoOpened({ x, y: y + 1 }),
    ];
  },
});

const checkStoreAndOpen = (cellStore?: Store<MatrixCellType>) => {
  if (!cellStore) return;

  const { hasMine, hasOpen, coordinates } = cellStore.getState();
  if (!hasMine && !hasOpen) {
    cellAutoOpened(coordinates);
  }
};

sample({
  clock: cellAutoOpened,
  source: $cellFieldStore,
  fn: (cellFieldStore, coordinates) => {
    const { x, y } = coordinates;
    checkStoreAndOpen(cellFieldStore[x - 1][y]);
    checkStoreAndOpen(cellFieldStore[x + 1][y]);
    checkStoreAndOpen(cellFieldStore[x][y - 1]);
    checkStoreAndOpen(cellFieldStore[x][y + 1]);
  },
});

import { createStore } from 'effector';
import { generateField } from 'utils/generateField';
import { getRandomInt } from 'utils/getRandomInt';
import { saveToLocalStorage, loadFromLocalStorage } from 'utils/localStorage';
import { objectToStore, storeToObject } from 'utils/store';
import { MatrixArrayType } from 'utils/getMatrixArray';
import { MatrixCellType } from 'types';
import { minePlanted } from './events';


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

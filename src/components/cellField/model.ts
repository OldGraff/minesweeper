import { createStore, sample, createEvent, guard } from 'effector';
import { generateField } from 'utils/generateField';
import { getRandomInt } from 'utils/getRandomInt';
import { Coordinates } from 'types';
import { minePlanted } from './events';


const MINES_COUNT = 10;
const FIELD_SIZE = 6;

export const plantedAllMines = createEvent();
export const getCellData = createEvent<Coordinates>();
export const $minesStore = createStore(MINES_COUNT);
export const $cellFieldStore = createStore(generateField(FIELD_SIZE));

const plantAllMines = () => {
  for (let i = MINES_COUNT; i !== 0;) {
    console.log('plantAllMines', i);
    const cellField = $cellFieldStore.getState();
    const [x, y] = [getRandomInt(FIELD_SIZE), getRandomInt(FIELD_SIZE)];
    // console.log('cellField', x, y);
    const isCellHasMine = cellField[x][y].getState().hasMine;
    console.log(isCellHasMine);
    if (!isCellHasMine) {
      console.log('minePlanted', x, y);
      minePlanted({ x, y });
      i -= 1;
    }
  }
};
plantAllMines();
// Array.from({ length: MINES_COUNT }, () => {
//   console.log('getRandomInt', getRandomInt(FIELD_SIZE));
//   console.log($cellFieldStore.getState());
//   return 1;
// });

const cellDataSelected = sample({
  source: $cellFieldStore,
  clock: getCellData,
  fn: ((source, clock) => source[clock.x][clock.y]),
});

// getCellData({ x: 1, y: 2 });
// console.log('test', test);

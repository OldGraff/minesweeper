import { createStore } from 'effector';
import { generateField } from 'utils/generateField';


export const $cellFieldStore = createStore(generateField(4));

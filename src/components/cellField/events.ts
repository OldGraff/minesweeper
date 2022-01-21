import { createEvent } from 'effector';
import { Coordinates } from 'types';


export const minePlanted = createEvent<Coordinates>();
export const cellOpened = createEvent<Coordinates>();
export const cellAutoOpened = createEvent<Coordinates>();

import { Coordinates } from '../types';


export const isNearbyCell = (self: Coordinates, target: Coordinates): boolean => {
  const isNearbyColumn = self.x - 1 <= target.x && self.x + 1 >= target.x;
  const isNearbyRow = self.y - 1 <= target.y && self.y + 1 >= target.y;
  return isNearbyRow && isNearbyColumn;
};

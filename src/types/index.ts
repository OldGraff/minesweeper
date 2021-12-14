export interface Coordinates { x: number, y: number }

export interface MatrixCellType {
  hasMine: boolean,
  hasOpen: boolean,
  hasFlag: boolean,
  hasQuestion: boolean,
  minesAround: number,
  coordinates: Coordinates,
}

export type MatrixArrayType<T> = T[][];

export const getMatrixArray = <T>(
  getContent: (x: number, y: number) => T,
  rows = 10,
  columns?: number,
): MatrixArrayType<T> => Array.from(
    { length: rows }, (v, rowIndex) => Array.from(
      { length: columns || rows }, (v2, cellIndex) => getContent(rowIndex, cellIndex),
    ),
  );

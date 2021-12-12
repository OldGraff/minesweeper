export type MatrixArrayType<T> = T[][];

export const getMatrixArray = <T>(
  getContent: () => T,
  rows = 10,
  columns?: number,
): MatrixArrayType<T> => Array.from(
    { length: rows }, () => Array.from(
      { length: columns || rows }, () => getContent(),
    ),
  );

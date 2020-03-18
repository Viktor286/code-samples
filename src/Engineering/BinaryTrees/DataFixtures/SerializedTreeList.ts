import { SerializedBiTree } from '../../Types';

export const SerializedTreeList: SerializedBiTree[] = [
  [null],
  [1],
  [1, 2],
  [1, null, 2],
  [1, 2, 3],
  [1, null, 2, 3],
  [1, null, 2, null, 3],
  [1, 2, 4, 3],
  [1, 2, 4, null, 3],
  [1, 2, 4, null, null, 3],
  [1, 2, 4, null, null, null, 3],
  [1, 2, 5, 3, 4],
  [1, 2, 4, 3, null, 5],
  [1, 2, 4, 3, null, null, 5],
  [1, 2, 4, null, 3, 5],
  [1, 2, 4, null, 3, null, 5],
  [1, 2, 5, 3, 4, 6],
  [1, 2, 5, 3, 4, 6, 7],
];

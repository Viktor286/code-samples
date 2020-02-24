import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse,
} from './Engineering/BinaryTrees/01_preOrder';
import { deserialize } from './Engineering/BinaryTrees/TreeConvertor';
import { serializedTree } from './Data/BinaryTrees/Tree_01';

console.log(preOrderIterativeTraverse(deserialize(serializedTree)));
console.log(preOrderRecursiveTraverse(deserialize(serializedTree)));

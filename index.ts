import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse,
} from './Engineering/BinaryTrees/01_preOrder';
import { deserialize } from './Engineering/BinaryTrees/TreeConvertor';
import { SerializedTree } from './Data/BinaryTrees/SerializedTree';

console.log(preOrderIterativeTraverse(deserialize(SerializedTree)));
console.log(preOrderRecursiveTraverse(deserialize(SerializedTree)));

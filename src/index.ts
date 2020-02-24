import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse,
} from './Engineering/BinaryTrees/01_preOrder';
import { deserialize } from './Engineering/BinaryTrees/TreeConvertor';
import { SerializedTree_01 } from './DataFixtures/BinaryTrees/SerializedTree_01';

console.log(preOrderIterativeTraverse(deserialize(SerializedTree_01)));
console.log(preOrderRecursiveTraverse(deserialize(SerializedTree_01)));

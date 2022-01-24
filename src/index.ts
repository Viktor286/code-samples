import preOrderIterativeTraverse from './Engineering/BinaryTrees/02_PreOrder_Iterative';
import preOrderRecursiveTraverse from './Engineering/BinaryTrees/01_PreOrder_Recursive';
import BinaryTreeRig from './Engineering/BinaryTrees/Classes/BinaryTreeRig';
import { SerializedTreeList } from './Engineering/BinaryTrees/DataFixtures/SerializedTreeList';

console.log(
  preOrderIterativeTraverse(
    BinaryTreeRig.deserializeTree(SerializedTreeList[4]),
  ),
);
console.log(
  preOrderRecursiveTraverse(
    BinaryTreeRig.deserializeTree(SerializedTreeList[4]),
  ),
);

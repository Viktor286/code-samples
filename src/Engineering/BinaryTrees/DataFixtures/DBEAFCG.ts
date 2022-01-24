// in-order named tree: DBEAFCG
import TreeNode from "../Classes/TreeNode";

export default new TreeNode("A",
  new TreeNode("B",
    new TreeNode("D", null, null),
    new TreeNode("E", null, null)
  ),
  new TreeNode("C",
    new TreeNode("F", null, null),
    new TreeNode("G", null, null)
  )
);

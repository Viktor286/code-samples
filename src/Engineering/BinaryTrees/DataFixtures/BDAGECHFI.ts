// in-order named tree: BDAGECHFI
import TreeNode from "../Classes/TreeNode";

export default new TreeNode("A",
  new TreeNode("B",
    null,
    new TreeNode("D", null, null)
  ),
  new TreeNode("C",
    new TreeNode("E",
      new TreeNode("G", null, null),
      null
    ),
    new TreeNode("F",
      new TreeNode("H", null, null),
      new TreeNode("I", null, null)
    )
  )
);

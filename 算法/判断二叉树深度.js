/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 递归法

function TreeDepth(pRoot) {
  // write code here
  if (!pRoot) return 0
  var left = TreeDepth(pRoot.left) + 1
  var right = TreeDepth(pRoot.right) + 1
  return Math.max(left, right)

}


// 非递归法



/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
  // write code here
  if (!pRoot) {
    return true
  }
  return Math.abs(depth(pRoot.left) - depth(pRoot.right)) <= 1

  function depth(node) {
    if (!node) {
      return 0
    }
    if (!(node.left) && !(node.right)) {
      return 1
    }
    return Math.max(depth(node.left), depth(node.right)) + 1
  }
}


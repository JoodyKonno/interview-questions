/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {  
  if (t1 === null && t2 === null) {
    return null
  }
  
  const tree = new TreeNode(((t1 !== null) ? t1.val : 0) + ((t2 !== null) ? t2.val : 0))

  if (t1 === null && t2 !== null) {
    tree.left = mergeTrees(null, t2.left)
    tree.right = mergeTrees(null, t2.right)
  } else if (t1 !== null && t2 === null) {
    tree.left = mergeTrees(t1.left, null)
    tree.right = mergeTrees(t1.right, null)
  } else {
    tree.left = mergeTrees(t1.left, t2.left)
    tree.right = mergeTrees(t1.right, t2.right)
  }

  return tree  
};
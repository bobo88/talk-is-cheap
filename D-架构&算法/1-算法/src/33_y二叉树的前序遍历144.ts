;(function(){
    /**
     * 144. 二叉树的前序遍历
     * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
     * 
     * 输入：root = [1,null,2,3]
     * 输出：[1,2,3]
     * 
     * 输入：root = []
     * 输出：[]
     * 
     * 输入：root = [1]
     * 输出：[1]
     * 
     * 输入：root = [1,2]
     * 输出：[1,2]
     * 
     * 输入：root = [1,null,2]
     * 输出：[1,2]
     * 
     * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
     */
    /**
     * Definition for a binary tree node.
     */
    class TreeNode {
        val: number
        left: TreeNode | null
        right: TreeNode | null
        constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.left = (left===undefined ? null : left)
            this.right = (right===undefined ? null : right)
        }
    }

    function preorderTraversal(root: TreeNode | null): number[] {
        // 方法一

        return []
    };

})()
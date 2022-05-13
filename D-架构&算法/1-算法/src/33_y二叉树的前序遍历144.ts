;(function(){
    /**
     * 144. 二叉树的前序遍历
     * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
     * 【概念】二叉树的前序遍历： 
     *  按照访问 根节点——左子树——右子树 的方式遍历这棵树，而在访问左子树或者右子树的时候，
     *  我们按照同样的方式遍历，直到遍历完整棵树。
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
        // 方法一：递归
        // let res: number[] = []
        // function preorder (root: TreeNode | null) {
        //     if (!root) return;
        //     res.push(root.val);
        //     preorder(root.left);
        //     preorder(root.right);
        // }
        // preorder(root)
        // return res

        // 方法二： 迭代（官方）
        let res: number[] = [];
        let stack: (TreeNode | null)[] = [];
        if (root) stack.push(root);
        while (stack.length > 0) {
            const curNode: TreeNode | null = stack.pop() || null;
            if (curNode && curNode.val) {
                res.push(curNode.val);
            }
            if (curNode && curNode?.right !== null) {
                stack.push(curNode?.right)
            }
            if (curNode && curNode?.left !== null) {
                stack.push(curNode?.left)
            }
        }
        return res

        // 方法三：Morris 遍历
    };

})()
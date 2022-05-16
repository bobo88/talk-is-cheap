;(function(){
    /**
     * 145. 二叉树的后序遍历 -------- 【左子树——右子树——根节点】
     * 概念： 考察到一个节点后，将其暂存，遍历完左右子树后，再输出该节点的值。(左右根)
     * ------------------------------------------------------------------------------------------------
     * 
     * 
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

    function postorderTraversal(root: TreeNode | null): number[] {
        // 方法一：递归
        let res: number[] = []
        function preorder (root: TreeNode | null) {
            if (!root) return;
            preorder(root.left);
            preorder(root.right);
            res.push(root.val);
        }
        preorder(root)
        return res

        // 方法二： 迭代

        // 方法三：

        // 方法四：
    };

})()
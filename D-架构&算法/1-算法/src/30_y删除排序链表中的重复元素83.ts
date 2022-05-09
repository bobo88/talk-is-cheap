;(function(){
    /**
     * 83. 删除排序链表中的重复元素
     * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
     * 
     * 输入：head = [1,1,2]
     * 输出：[1,2]
     * 
     * 输入：head = [1,1,2,3,3]
     * 输出：[1,2,3]
     * 
     */

    /**
     * Definition for singly-linked list.
     */
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }
    function deleteDuplicates(head: ListNode | null): ListNode | null {
        // 方法一：双指针迭代 ? todo
        return head
    };

})()
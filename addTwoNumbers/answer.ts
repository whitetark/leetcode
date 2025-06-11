//https://leetcode.com/problems/add-two-numbers/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function formListNode(num: number): ListNode | null {
  const arr1 = String(num).split('');
  return arr1.reduce<ListNode | null>((prev, curr) => {
    return new ListNode(Number(curr), prev);
  }, null);
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  extra: number = 0,
): ListNode | null {
  if (!l1 && !l2 && extra < 1) {
    return null;
  }
  const firstNode = l1?.val || 0;
  const secondNode = l2?.val || 0;
  const result = firstNode + secondNode + extra;
  const newExtra = Math.floor(result / 10);
  return new ListNode(
    result % 10,
    addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, newExtra),
  );
}

const number1 = 9999999;
const number2 = 9999;

const l1 = formListNode(number1);
const l2 = formListNode(number2);

const result = addTwoNumbers(l1, l2);
console.log(result);

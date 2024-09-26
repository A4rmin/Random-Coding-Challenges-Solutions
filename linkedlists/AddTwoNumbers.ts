class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0); // Dummy node to keep track of the head
  let current = dummy; // Pointer for current node in the result list
  let carry = 0; // Carry over value for digits summing to more than 9

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;

    carry = Math.floor(sum / 10); // Update carry for the next iteration
    current.next = new ListNode(sum % 10); // Create a new node with the digit
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry); // Add any remaining carry
  }

  return dummy.next; // Return the next node to skip the dummy head
}

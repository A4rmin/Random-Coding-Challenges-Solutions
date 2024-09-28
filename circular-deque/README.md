
### Problem: Design Circular Deque

This problem is about implementing a circular double-ended queue (deque), a data structure that allows insertion and deletion at both ends (front and rear) while maintaining a fixed size. The challenge lies in managing the deque efficiently, making sure operations like inserting, deleting, and accessing elements follow the circular behavior.

---

### Problem Statement

You need to implement the `MyCircularDeque` class, which should support the following operations:

1. **Initialization**: Initializes the deque with a maximum size `k`.
2. **Insert Front**: Adds an item to the front. Returns `true` if successful, otherwise `false`.
3. **Insert Last**: Adds an item to the rear. Returns `true` if successful, otherwise `false`.
4. **Delete Front**: Deletes an item from the front. Returns `true` if successful, otherwise `false`.
5. **Delete Last**: Deletes an item from the rear. Returns `true` if successful, otherwise `false`.
6. **Get Front**: Retrieves the front item. Returns `-1` if the deque is empty.
7. **Get Rear**: Retrieves the last item. Returns `-1` if the deque is empty.
8. **Is Empty**: Checks if the deque is empty.
9. **Is Full**: Checks if the deque is full.

### Example

```ts
Input
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]

Output
[null, true, true, true, false, 2, true, true, true, 4]
```

Explanation:
- Initialize `MyCircularDeque` with size 3.
- Insert 1 at the rear -> `true`.
- Insert 2 at the rear -> `true`.
- Insert 3 at the front -> `true`.
- Attempt to insert 4 at the front, but the deque is full -> `false`.
- Get the rear item -> `2`.
- Check if deque is full -> `true`.
- Delete the rear item -> `true`.
- Insert 4 at the front -> `true`.
- Get the front item -> `4`.

### Constraints:
- 1 <= k <= 1000
- 0 <= value <= 1000
- At most 2000 calls will be made to the operations.

---

### Approach

This can be approached by managing an array with two pointers to represent the circular behavior: one for the front and one for the rear. We'll handle both ends of the deque while ensuring we respect the size limit. To achieve the circular behavior, the front and rear pointers will wrap around when they reach the end of the array.

1. **Initialization**: We maintain an array of size `k` and two pointers (`front` and `rear`) that indicate the positions for inserting and deleting elements.
2. **Insert/Deletion**: Each operation adjusts the front/rear pointers accordingly and checks the circular boundaries.
3. **Get Operations**: Retrieve values from the front or rear while ensuring the deque is not empty.


### Explanation:

1. **Initialization**:
   - The deque is initialized with a capacity `k` and the array `deque` stores the elements.
   - `front` and `rear` pointers are initialized at 0.
   - The `size` keeps track of the number of elements in the deque.

2. **Insertions**:
   - `insertFront`: Adjusts the `front` pointer and inserts the element at the new `front` index.
   - `insertLast`: Inserts the element at the `rear` pointer and adjusts the `rear` pointer accordingly.

3. **Deletions**:
   - `deleteFront`: Moves the `front` pointer forward and reduces the size.
   - `deleteLast`: Moves the `rear` pointer backward and reduces the size.

4. **Getting Elements**:
   - `getFront`: Returns the value at the `front` unless the deque is empty.
   - `getRear`: Returns the value just before the `rear` pointer unless the deque is empty.

5. **Capacity Checks**:
   - `isEmpty`: Checks if the deque has no elements.
   - `isFull`: Checks if the deque has reached its capacity.

---

### Complexity Analysis:

- **Time Complexity**: O(1) for all operations (`insertFront`, `insertLast`, `deleteFront`, `deleteLast`, `getFront`, `getRear`, `isEmpty`, `isFull`), as each operation only involves a constant amount of work.
- **Space Complexity**: O(k), where `k` is the capacity of the deque, as we are using an array of size `k` to store the elements.



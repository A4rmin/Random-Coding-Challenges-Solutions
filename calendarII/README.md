
## Problem: My Calendar II

The problem **"My Calendar II"** requires implementing a calendar that allows adding events without causing a **triple booking**. A triple booking occurs when three events overlap at any point in time.

### Problem Statement:

We are asked to implement a class `MyCalendarTwo` with the following methods:
1. **`MyCalendarTwo()`**: Initializes the calendar object.
2. **`book(int start, int end)`**: Attempts to add an event represented by the interval `[start, end)`. Returns `true` if the event can be added without causing a triple booking. Otherwise, it returns `false`.

The event is represented as a pair of integers `[start, end)` where `start` is inclusive, and `end` is exclusive.

### Example:

```text
Input:
["MyCalendarTwo", "book", "book", "book", "book", "book", "book"]
[[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]

Output:
[null, true, true, true, false, true, true]

Explanation:
MyCalendarTwo myCalendarTwo = new MyCalendarTwo();
myCalendarTwo.book(10, 20); // return true, event can be booked
myCalendarTwo.book(50, 60); // return true, event can be booked
myCalendarTwo.book(10, 40); // return true, event is double booked but no triple booking
myCalendarTwo.book(5, 15);  // return false, would cause a triple booking
myCalendarTwo.book(5, 10);  // return true, no triple booking
myCalendarTwo.book(25, 55); // return true, some time will be double booked, but no triple booking
```

### Approach:

To solve this problem, we need to manage overlapping events:
1. **Single-booked intervals**: These are regular intervals where an event has been booked once.
2. **Double-booked intervals**: These intervals occur when two events overlap, meaning they cannot overlap again.

#### Steps:
1. We keep two lists: 
   - `bookings[]`: This stores all single-booked intervals.
   - `overlaps[]`: This stores double-booked intervals.
   
2. When trying to add a new event, we first check if it would cause a **triple booking** by checking its overlap with `overlaps[]`. If an overlap exists in this list, the event would cause a triple booking and cannot be added.

3. If no triple booking is found, we check if the new event overlaps with any existing event in `bookings[]`. If an overlap occurs, the overlapping part is added to `overlaps[]`, as this part of the event will be **double booked**.

4. Finally, the event is added to `bookings[]` if no triple booking is found.

### Explanation:

1. **Initialization**:
   - `bookings[]`: Stores all events that have been booked.
   - `overlaps[]`: Stores the intervals that are double-booked, i.e., when two events overlap.

2. **Booking Logic**:
   - For each new event `(start, end)`, check if it overlaps with any interval in `overlaps[]`. If it does, it would cause a triple booking, so we return `false`.
   - If no triple booking is found, we check for overlaps with intervals in `bookings[]`. If overlaps are found, the overlapping portion is added to `overlaps[]`.
   - Finally, we add the event to `bookings[]`.

3. **Checking Overlap**:
   - The overlap occurs if `start < end of existing event` and `end > start of existing event`.

### Time Complexity:
- **Time Complexity**: For each booking, we check for overlaps in `bookings[]` and `overlaps[]`. Given at most `n` bookings, the time complexity is **O(n)** for each `book` operation.
- **Space Complexity**: **O(n)** because we store at most `n` intervals in `bookings[]` and `overlaps[]`.

### Conclusion:
This solution efficiently handles event booking by maintaining separate lists for single bookings and double bookings. The strategy ensures that we avoid triple bookings while allowing events to overlap when necessary.

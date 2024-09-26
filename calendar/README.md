
## My Calendar I

### Problem Statement

You need to implement a calendar system that supports adding events. If the event does not overlap with any previously added event, it can be booked successfully. Otherwise, return `false`. An event is represented as a pair of integers `[start, end)` where:
- `start` is inclusive, but `end` is exclusive.
- A double booking happens when two events overlap.

### Example

```ts
Input: ["MyCalendar", "book", "book", "book"]
       [[], [10, 20], [15, 25], [20, 30]]
Output: [null, true, false, true]

Explanation:
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20);  // return True
myCalendar.book(15, 25);  // return False (15 overlaps with the previous event)
myCalendar.book(20, 30);  // return True (no overlap)
```

### Constraints:
- `0 <= start < end <= 10^9`
- At most `1000` calls will be made to `book`.

## Approach

The problem can be approached using a **brute-force solution** where we maintain a list of all previously booked events, and for each new event, we check if it overlaps with any previously booked event. The key is to check the following condition for overlap:
- A new event overlaps if:
  - `start` is before the `end` of the current event, and
  - `end` is after the `start` of the current event.

If no overlap is found, we can safely book the new event.

### Explanation:
1. **Initialization**: We initialize the `MyCalendar` class with an empty list to store events (`this.bookings`).
2. **Booking Logic**:
   - For each new booking request, we check if it overlaps with any existing event in the `this.bookings` list.
   - If there is overlap, return `false`.
   - Otherwise, add the event to the bookings list and return `true`.
3. **Checking Overlap**:
   - The new event overlaps if the `start` time of the new event is before the `end` time of an existing event, **and** the `end` time of the new event is after the `start` time of the existing event.

### Complexity Analysis

- **Time Complexity**: O(n), where `n` is the number of events already booked. Each `book` call iterates through all the previous bookings to check for overlap.
- **Space Complexity**: O(n), where `n` is the number of events. We store all booked events in an array.



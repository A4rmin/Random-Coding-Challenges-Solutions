
## Zigzag Conversion

### Problem Statement

The string `"PAYPALISHIRING"` is written in a zigzag pattern over a specified number of rows. The goal is to return the string after reading the zigzag pattern row by row.

### Example

```ts
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Explanation:
P   A   H   N
A P L S I I G
Y   I   R
```

### Constraints:
- `1 <= s.length <= 1000`
- The string `s` consists of only English letters (both upper-case and lower-case), and punctuation marks such as `,` and `.`.
- `1 <= numRows <= 1000`

## Approach

We simulate the zigzag pattern by iterating through the string and placing each character in the appropriate row:
1. **Handle Edge Case**: If `numRows == 1`, return the original string since there will be no zigzagging.
2. **Use an Array of Strings**: Create an array with `numRows` elements to store characters for each row.
3. **Iterate through the String**: Traverse through the string, moving down the rows and then back up in a "zigzag" fashion.
4. **Rebuild the Result**: After placing all characters into their respective rows, concatenate all the rows to form the final output string.


### Explanation:
1. **Edge Case**: If `numRows == 1`, the string is simply returned because there is no zigzagging.
2. **Rows Array**: We use an array `rows[]` where each element corresponds to a row in the zigzag. We populate the rows as we traverse the string.
3. **Direction**: A boolean `goingDown` tracks whether we are moving down the rows or going back up. We toggle this when we reach the top or bottom row.
4. **Row Building**: As we traverse each character, we append it to the current row (`rows[curRow]`). Then, based on the direction, we move to the next row.

### Example Walkthrough

For the input `s = "PAYPALISHIRING"` and `numRows = 4`:
- Initialize `rows = ["", "", "", ""]` (4 rows).
- Traverse through `s`:
    - Start at row 0: Add 'P', then move down.
    - Row 1: Add 'A', then move down.
    - Row 2: Add 'Y', then move down.
    - Row 3: Add 'P', then reverse direction (start moving up).
    - Continue until the entire string is placed into rows.
- Concatenate all rows: `"PINALSIGYAHRPI"`.

### Complexity Analysis

- **Time Complexity**: O(n), where `n` is the length of the string `s`. We traverse the string once and process each character.
- **Space Complexity**: O(n), where `n` is the length of the string. We store characters in the `rows[]` array and concatenate them at the end.




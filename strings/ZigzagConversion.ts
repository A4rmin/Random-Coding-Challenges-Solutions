function convert(s: string, numRows: number): string {
  if (numRows === 1) return s; // No zigzag needed for 1 row

  const rows: string[] = Array(Math.min(numRows, s.length)).fill(""); // Create numRows empty strings
  let curRow = 0; // Start at the top row
  let goingDown = false; // Direction indicator

  // Place each character in the correct row
  for (let i = 0; i < s.length; i++) {
    rows[curRow] += s[i];
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown; // Reverse direction at the top and bottom
    curRow += goingDown ? 1 : -1; // Move down or up
  }

  return rows.join(""); // Concatenate all rows to form the final string
}

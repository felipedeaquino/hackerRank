function birthday(s, d, m) {
  let output = 0;
  // only iterates if month is a valid segment of s 
  for (let i = 0; i <= s.length - m; i++) {
    // get the contiguous segment of the bar
    const subS = s.slice(i, i + m);
    // checks segment integers sum
    const reduced = subS.reduce((acc, cur) => acc + cur, 0);
    if (reduced === d) output++;
  }
  return output;
}
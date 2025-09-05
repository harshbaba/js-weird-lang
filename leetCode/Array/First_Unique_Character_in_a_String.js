/*First Unique Character in a String
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1

 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.

*/
/* this program has o(n2) time complexity bcoz indexOf & lastIndexOf)*/
/*
var firstUniqChar = function(s) {
    for(let i = 0; i< s.length; i++){
        const char = s[i];
        const firstIndex = s.indexOf(char);
        const lastIndex = s.lastIndexOf(char);
        if(firstIndex === lastIndex)
        return i;
    }
    return -1;
};
*/
/*time complexity o(n) + o(n) = o(2n) => o(n) */
function firstUniqChar(s) {
  const freq = {};
  // First pass: count frequency
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }
  // Second pass: find first char with frequency 1
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}
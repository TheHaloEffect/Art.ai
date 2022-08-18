// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s) {
  let max = 0;
  let start = 0;
  let end = 0;
  let map = {};
  while (end < s.length) {
    if (map[s[end]]) {
      start = Math.max(start, map[s[end]] + 1);
    }
    map[s[end]] = end;
    max = Math.max(max, end - start + 1);
    end++;
  }
  return max;
}
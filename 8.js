function checkPart(part) {
  const isPalindrome = (string) =>
    string === string.split("").reverse().join("");

  if (isPalindrome(part)) return true;
  for (let i = 0; i < part.length; i++) {
    const substring = part.slice(0, i) + part.slice(i + 1);
    if (isPalindrome(substring)) return true;
  }
  return false;
}

const p1 = checkPart("uwu"); // true
console.log(p1);
// "uwu" is a palindrome without removing any character

const p2 = checkPart("miidim"); // true
console.log(p2);
// "miidim" can be a palindrome after removing the first "i"

const p3 = checkPart("midu"); // false
console.log(p3);
// "midu" cannot be a palindrome after removing a character

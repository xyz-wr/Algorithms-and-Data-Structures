function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    frequencyCounter2[str2[j]] = (frequencyCounter2[str2[j]] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}
sameFrequency(182, 281)

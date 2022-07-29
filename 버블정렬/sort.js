function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

["Steele", "colt", "Data Structures", "Algorithms"].sort(compareByLen);
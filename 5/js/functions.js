const isLengthString = (string, length) => string.length <= length;
isLengthString('123', 3);

const isPalindrom = (string) => {
  const lowerString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = lowerString.length - 1; i >= 0; i--) {
    reverseString += lowerString.at(i);
  }
  return lowerString === reverseString;
};
isPalindrom ('полиндром');

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return +result;
};
extractNumber ('год 2023');

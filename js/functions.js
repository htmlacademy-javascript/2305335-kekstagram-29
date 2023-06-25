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

const calculateTime = (start, finish, startMeeting, duration) => {
  const finishTimeNumber = finish.split(':').map (Number);
  const resultfinishTime = finishTimeNumber[0] * 60 + finishTimeNumber[1];
  const startMeetingTimeNumber = startMeeting.split(':').map (Number);
  const resultStartMeetingTime = startMeetingTimeNumber[0] * 60 + startMeetingTimeNumber[1];
  if (duration <= resultfinishTime - resultStartMeetingTime) {
    return true;
  }
  return false;
};
calculateTime('08:00', '17:30', '14:00', 90);

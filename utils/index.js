export const random = (max = 10) => Math.trunc(Math.random() * max);

export const randomIntNoZero = (max = 10) =>
  Math.trunc(Math.random() * (max - 1) + 1);

export const range = (num = 0, func = () => {}) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(func(i));
  }

  return arr;
};

export const uniqueRandomIndexNumbers = (quantity, max) => {
  const randomIndexNumbers = [];
  while (randomIndexNumbers.length < quantity) {
    const randomNum = random(max);
    if (randomIndexNumbers.indexOf(randomNum) === -1)
      randomIndexNumbers.push(randomNum);
  }
  return randomIndexNumbers;
};

export const getRandomUniqueArrValues = (quantity, arr) => {
  const randomValues = [];
  uniqueRandomIndexNumbers(quantity, arr.legth).map((index) =>
    randomValues.push(arr[index])
  );
  return randomValues;
};

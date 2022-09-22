export const random = (max = 10) => Math.trunc(Math.random() * max);

export const range = (num = 0, func = () => {}) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(func(i));
  }

  return arr;
};

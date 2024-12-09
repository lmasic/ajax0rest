export const random = (min = 0, max = 1) => Math.random() * (max - min) + min;

export const sum = (a, b, ...other) => {
  const start = a + b;

  return other.reduce((summary, number) => summary + number, start);
};

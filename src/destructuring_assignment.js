const letters = ["b", "a", "a", "b", "c", "c", "c", "d", "f"];

const count = {};

letters.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log(count);

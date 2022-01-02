// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).
const factorial = (n) => {
  if (n > 1) {
    return n * factorial(n - 1);
  }
  return 1;
};

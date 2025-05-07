export const divide = (a: number, b: number) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a * b;
}
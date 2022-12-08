import input from "./input";

export const elfCalories = input
  .split("\n\n")
  .map((elf) => {
    return elf
      .split("\n")
      .reduce((total, current) => total + Number(current), 0);
  })
  .sort((a, b) => b - a);

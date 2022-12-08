import { elfCalories } from "./01/index";
import { totalScore, ultraTopSecretStrategyGuideTotalScore } from "./02/index";

console.log("01_01 - the Elf carrying the most Calories:", elfCalories[0]);
console.log(
  "01_02 - top three Elves carrying the most Calories:",
  elfCalories[0] + elfCalories[1] + elfCalories[2]
);
console.log("02_01 - my total score: ", totalScore());

console.log(ultraTopSecretStrategyGuideTotalScore());

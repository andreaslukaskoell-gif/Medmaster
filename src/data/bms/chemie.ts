import type { Question } from "./index";
import { chemieQuestionsPart1 } from "./chemie_part1";
import { chemieQuestionsPart2 } from "./chemie_part2";

export const chemieQuestions: Question[] = [
  ...chemieQuestionsPart1,
  ...chemieQuestionsPart2,
];

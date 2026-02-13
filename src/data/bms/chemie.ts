import type { Question } from "./index";
import { chemieQuestionsPart1 } from "./chemie_part1";
import { chemieQuestionsPart2 } from "./chemie_part2";
import { chemieQuestionsPart3 } from "./chemie_part3";

export const chemieQuestions: Question[] = [
  ...chemieQuestionsPart1,
  ...chemieQuestionsPart2,
  ...chemieQuestionsPart3,
];

import type { Question } from "./index";
import { physikQuestionsPart1 } from "./physik_part1";
import { physikQuestionsPart2 } from "./physik_part2";

export const physikQuestions: Question[] = [
  ...physikQuestionsPart1,
  ...physikQuestionsPart2,
];

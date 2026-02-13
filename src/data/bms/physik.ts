import type { Question } from "./index";
import { physikQuestionsPart1 } from "./physik_part1";
import { physikQuestionsPart2 } from "./physik_part2";
import { physikQuestionsPart3 } from "./physik_part3";

export const physikQuestions: Question[] = [
  ...physikQuestionsPart1,
  ...physikQuestionsPart2,
  ...physikQuestionsPart3,
];

import type { Question } from "./index";
import { mathematikQuestionsPart1 } from "./mathematik_part1";
import { mathematikQuestionsPart2 } from "./mathematik_part2";

export const mathematikQuestions: Question[] = [
  ...mathematikQuestionsPart1,
  ...mathematikQuestionsPart2,
];

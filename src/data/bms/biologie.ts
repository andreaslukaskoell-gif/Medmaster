import type { Question } from "./index";
import { biologieQuestionsPart1 } from "./biologie_part1";
import { biologieQuestionsPart2 } from "./biologie_part2";
import { biologieQuestionsPart3 } from "./biologie_part3";
import { biologieQuestionsPart4 } from "./biologie_part4";

export const biologieQuestions: Question[] = [
  ...biologieQuestionsPart1,
  ...biologieQuestionsPart2,
  ...biologieQuestionsPart3,
  ...biologieQuestionsPart4,
];

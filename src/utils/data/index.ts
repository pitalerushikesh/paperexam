import { physicsQuestions } from "./physics";
import { chemistryQuestions } from "./chemistry";
import { mathsQuestions } from "./maths";
import type { Question } from "../types";

// Create a map to easily access questions by subject name
export const QUESTION_BANK: Record<string, Question[]> = {
  physics: physicsQuestions,
  chemistry: chemistryQuestions,
  maths: mathsQuestions,
};

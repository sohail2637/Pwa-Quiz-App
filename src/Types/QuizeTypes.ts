
export type QuestionsType = {
  question: string;
  options: string[];
  answers: string;
  correct_answer: string;
};
export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  
};
export type QuesLevel = {
  questionLevel: String;
};
export type ConfigNotification = {
  
}
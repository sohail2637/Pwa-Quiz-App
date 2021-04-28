
import { QuestionsType, Quiz } from '../Types/QuizeTypes';
const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);


export const Fetchdata = async (
  totalQuestions: Number,
  level: string
): Promise<QuestionsType[]> => {
  const result = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple
  `);
  const {results} = await result.json();
    console.log(results);
    const quiz = results.map((quizobj: Quiz) => {
        return {
          question: quizobj.question,
          answers: quizobj.correct_answer,
          options: shuffleArray(
            quizobj.incorrect_answers.concat(quizobj.correct_answer)
          ),
        };
    })
    return (quiz);
};
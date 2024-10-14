import Question from '@/app/models/Question';
import Answer from '@/app/models/Answer';
import dbConnect from '@/app/database/dbConnect';

export async function getAllQuestionsDB() {
  await dbConnect();
  try {
    const questions = await Question.find().sort({ questionId: 'asc' });
    console.log(questions)
    return { questions: JSON.parse(JSON.stringify(questions)) };
  } catch (error) {
    console.log('Error: ', error.message);
    return { questions: [], category: null };
  }
}

export async function getOneQuestionDB(questionId) {
  await dbConnect();
  try {
    const question = await Question.findOne({ questionId: questionId });
    return { question: JSON.parse(JSON.stringify(question)) };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAllAnswersDB(questionId) {
  await dbConnect();
  try {
    const answers = await Answer.find({questionId: questionId}).sort({ questionId: 'asc' });
    return { answers: JSON.parse(JSON.stringify(answers)) };
  } catch (error) {
    console.log('Error: ', error.message);
    return { answers: [], category: null };
  }
}

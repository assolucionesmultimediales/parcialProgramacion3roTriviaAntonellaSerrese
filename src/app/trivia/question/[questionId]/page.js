import Inner from '@/app/components/Inner';
import { getOneQuestionDB, getAllAnswersDB } from '@/app/actions';
import QuestionSingle from '@/app/components/QuestionSingle';

const Question = async ({ params }) => {
  const { questionId } = params;
  const questionResponse = await getOneQuestionDB(questionId);
  const answersResponse = await getAllAnswersDB(questionId);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/imgs/fondogif.gif')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-black bg-opacity-75 "></div>
      <div className="relative z-10 pt-10 ">
        <Inner>
          <QuestionSingle questionResponse={questionResponse} answersResponse={answersResponse} />
        </Inner>
      </div>
    </div>
  );
};

export default Question;

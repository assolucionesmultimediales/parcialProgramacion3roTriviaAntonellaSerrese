import AnswerCard from '@/app/components/AnswerCard';
import Link from 'next/link';

const QuestionSingle = ({ questionResponse, answersResponse }) => {
  return (
    <>
      <section className='border-4 border-pink-300 p-10 bg-black bg-opacity-40 text-3xl font-roboto font-semibold text-white mt-20'>
        <h1 className='mb-16 mt-4'>{questionResponse.question.title}</h1>
        <ul>
          {answersResponse.answers.map((answer) => (
            <li className='mb-10' key={answer.answerId}>
              <AnswerCard
                answer={answer}
                question={questionResponse.question}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className='text-2xl text-white font-roboto font-medium mt-10 hover:text-3xl hover:text-pink-300'>
        <Link 
          href={
            questionResponse.question.questionId < 5
              ? `/trivia/question/${questionResponse.question.questionId + 1}`
              : `/ranking`
          }
        >
          Siguiente
        </Link>
      </section>
    </>
  );
};

export default QuestionSingle;

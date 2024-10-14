'use client';
import Link from 'next/link';
import { useAppContext } from '@/app/contexts/AppContext';

const QuestionCard = ({ question }) => {
  const { userResponses } = useAppContext(question.id);

  return (
    <div className='col-span-6 lg:col-span-3 border-4 border-pink-300 p-10 bg-black bg-opacity-40'>
      <Link href={`/trivia/question/${question.questionId}`} className="text-pink-500 font-inter font-medium hover:underline">
        {question.title} 
      </Link>

      <div className='mt-10'>
        {userResponses.find(
          (response) => response.question.title === question.title
        ) ? (
          <p>Respondido</p>
        ) : (
          <p>No respondió</p>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;


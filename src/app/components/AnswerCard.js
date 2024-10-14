'use client';
import { useAppContext } from '@/app/contexts/AppContext';

const AnswerCard = ({ answer, question }) => {
  const { handleSetUserResponses, selectedAnswer } = useAppContext();
  return (
    <button onClick={() => handleSetUserResponses(question, answer)}
      
      className={` bg-pink-700 text-white p-3 rounded text-2xl hover:bg-pink-300 mb-3 ${
        selectedAnswer(question, answer)
          ? `border-4 border-yellow-400`
          : `border-4 border-white`
      }`}
    >
      {answer.title}
    </button>
  );
};

export default AnswerCard;

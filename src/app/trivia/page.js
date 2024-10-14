import Inner from '@/app/components/Inner';
import { getAllQuestionsDB } from '@/app/actions';
import QuestionCard from '@/app/components/QuestionCard';

const Trivia = async () => {
  const response = await getAllQuestionsDB();

  return (
    <section className='relative h-screen'>
      <div className="absolute inset-0 bg-[url('/imgs/fondogif.gif')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative z-10 h-full pt-4">
        <Inner>
          <h1 className='text-3xl font-roboto font-semibold text-white pt-10 pb-10'>Trivia</h1>
          <div className='grid grid-cols-12 gap-10 text-white'>
            {response.questions && response.questions.map((question, index) => (
              <QuestionCard key={index} question={question} />
            ))}
          </div>
        </Inner>
      </div>
    </section>
  );
};

export default Trivia;

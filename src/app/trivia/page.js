import Inner from '@/app/components/Inner';
import { getAllQuestionsDB } from '@/app/actions';
import QuestionCard from '@/app/components/QuestionCard';

const Trivia = async () => {
  const response = await getAllQuestionsDB();

  return (
    <section className='relative min-h-screen'>
      {/* Fondo */}
      <div className="absolute inset-0 bg-[url('/imgs/fondogif.gif')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        <Inner>
          <h1 className='text-3xl font-roboto font-semibold text-white pt-10 pb-10'>
            Trivia
          </h1>
          {/* Grilla responsive */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white'>
            {response.questions && response.questions.map((question, index) => (
              <QuestionCard key={index} question={question} />
            ))}
          </div>
        </Inner>
        {/* Espaciador para asegurar que el contenido no se superponga con el footer */}
        <div className="pb-16"></div>
      </div>
    </section>
  );
};

export default Trivia;

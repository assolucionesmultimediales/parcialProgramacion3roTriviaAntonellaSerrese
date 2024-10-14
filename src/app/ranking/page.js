import Inner from '@/app/components/Inner';
import RankingSingle from '@/app/components/RankingSingle';

const Ranking = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/imgs/fondogif.gif')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative z-10 flex items-center justify-center pt-8">
        <div className="border-4 border-pink-300 bg-black bg-opacity-70 text-white text-center p-10 rounded-lg shadow-lg">
          <Inner>
            <h1 className="text-3xl font-roboto font-semibold mb-2">Ranking de respuestas</h1>
            <RankingSingle />
          </Inner>
        </div>
      </div>
    </section>
  );
};

export default Ranking;

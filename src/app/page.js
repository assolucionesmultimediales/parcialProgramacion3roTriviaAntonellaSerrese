import HomeHero from '@/app/components/HomeHero';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
        <h1 className='font-roboto font-medium text-5xl text-slate-100 mb-12'>Trivia Tecnológica</h1>
        <Link className=' bg-pink-700 text-white p-3 rounded text-2xl hover:bg-pink-300' href='/trivia'>
          Comenzar
        </Link>
      </section>
    </div>
  );
}

import HomeHero from '@/app/components/HomeHero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='relative'>
      <HomeHero />
      <section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
        {/* Ajuste de tamaño de texto para diferentes pantallas */}
        <h1 className='font-roboto font-medium text-3xl sm:text-4xl md:text-5xl text-slate-100 mb-8 sm:mb-10 md:mb-12 text-center'>
          Trivia Tecnológica
        </h1>
        {/* Botón responsive */}
        <Link
          className='bg-pink-700 text-white p-2 sm:p-3 md:p-4 rounded text-lg sm:text-xl md:text-2xl hover:bg-pink-300'
          href='/trivia'
        >
          Comenzar
        </Link>
      </section>
    </div>
  );
}

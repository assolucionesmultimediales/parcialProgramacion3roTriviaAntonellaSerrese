'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <div className='flex justify-between items-center h-24 bg-black text-pink-300 px-10 border-b-8 border-pink-300 font-roboto font-medium'>
      <Link href={`/`}>
        <Image src={`/imgs/logo.png`} width={50} height={50} alt='Logo' />
      </Link>
      <nav>
        <ul className='flex justify-center items-center gap-5'>
          <li>
            <Link href={`/trivia`} className='hover:text-xl hover:text-pink-700'>Trivia</Link>
          </li>
          <li>
            <Link href={`/ranking`} className='hover:text-xl hover:text-pink-700'>Ranking</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

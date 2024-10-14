import Image from 'next/image';

const HomeHero = () => {
  return (
    <div style={{ width: '100%', height: '82vh', position: 'relative' }}>
      <Image
        src={`/imgs/fondogif.gif`}
        layout='fill' 
        objectFit='cover' 
        alt='hero'
      />
    </div>
  );
};

export default HomeHero;

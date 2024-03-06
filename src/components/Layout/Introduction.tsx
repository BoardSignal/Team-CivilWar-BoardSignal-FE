import logoImage from '@/assets/logo.png';

const Introduction = () => (
  <div className='flex flex-col items-center'>
    <img src={logoImage} />
    <p className='text-center text-gray-500'>
      "매치업! 보드게임을 즐기는 사람들을 찾는 최적의 장소."
    </p>
  </div>
);

export default Introduction;

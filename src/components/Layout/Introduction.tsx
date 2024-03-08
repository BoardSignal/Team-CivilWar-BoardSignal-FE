import logoImage from '@/assets/logo.png';
import { SLOGAN_MESSAGE } from '@/constants/messages/boardSignal';

const Introduction = () => (
  <div className='flex flex-col items-center'>
    <img src={logoImage} />
    <p className='text-center text-gray-500'>{SLOGAN_MESSAGE}</p>
  </div>
);

export default Introduction;

import { Link } from 'react-router-dom';

import Button from '@/components/Button';

interface EditProfileButtonProps {
  userId: string;
}

const EditProfileButton = ({ userId }: EditProfileButtonProps) => {
  return (
    <div className='border-b border-gray-accent7 p-4'>
      <Link to={`/users/edit${userId}`}>
        <Button className='rounded-lg bg-primary text-white'>
          프로필 수정
        </Button>
      </Link>
    </div>
  );
};

export default EditProfileButton;

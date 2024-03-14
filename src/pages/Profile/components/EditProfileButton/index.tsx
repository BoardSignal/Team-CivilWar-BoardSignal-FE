import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import { USERS_EDIT_PAGE_URL } from '@/constants/pageRoutes';

interface EditProfileButtonProps {
  userId: string;
}

const EditProfileButton = ({ userId }: EditProfileButtonProps) => (
  <div className='border-b border-gray-accent7 p-4'>
    <Link to={`${USERS_EDIT_PAGE_URL}/${userId}`}>
      <Button className='rounded-lg bg-primary text-white'>프로필 수정</Button>
    </Link>
  </div>
);

export default EditProfileButton;

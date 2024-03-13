import { useGetLoggedInUserApi } from '@/apis/loggedInUser';

const useGetLoggedInUserId = () => {
  const { id: currentUserId } = useGetLoggedInUserApi();

  return currentUserId;
};

export default useGetLoggedInUserId;

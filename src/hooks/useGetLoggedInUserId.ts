import { useGetLoggedInUserApi } from '@/apis/getLoggedInUser';

const useGetLoggedInUserId = () => {
  const { id: currentUserId } = useGetLoggedInUserApi();

  return currentUserId;
};

export default useGetLoggedInUserId;

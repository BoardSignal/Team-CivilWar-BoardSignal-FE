import { HttpStatusCode, isAxiosError } from 'axios';

const checkIsGetNotFound = (error: unknown) => {
  if (!isAxiosError(error)) {
    return false;
  }

  return (
    error.config?.method === 'get' &&
    (error.response?.status === HttpStatusCode.BadRequest ||
      error.response?.status === HttpStatusCode.NotFound)
  );
};

export default checkIsGetNotFound;

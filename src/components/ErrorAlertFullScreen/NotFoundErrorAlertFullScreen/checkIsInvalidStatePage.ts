import InvalidStatePageError from './InvalidStatePageError';

const checkIsInvalidStatePage = (error: unknown) => {
  return error instanceof InvalidStatePageError;
};

export default checkIsInvalidStatePage;

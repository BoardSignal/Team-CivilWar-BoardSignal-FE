class InvalidStatePageError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'InvalidStatePageError';
  }
}

export default InvalidStatePageError;

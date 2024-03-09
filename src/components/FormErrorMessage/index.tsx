interface FormErrorMessageProps {
  message: string | undefined;
}

const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  return (
    <p role='alert' className='text-sm text-red-500'>
      {message}
    </p>
  );
};

export default FormErrorMessage;

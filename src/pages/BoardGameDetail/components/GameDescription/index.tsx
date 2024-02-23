interface DescriptionProps {
  description: string;
}
const GameDescription = ({ description }: DescriptionProps) => {
  return (
    <div className='text-accent-gray1 flex flex-col gap-1.5 border-b border-gray-accent7 p-4'>
      <span className='font-bold'>설명</span>
      <p>{description}</p>
    </div>
  );
};

export default GameDescription;

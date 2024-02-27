interface DescriptionProps {
  description: string;
}
const GameDescription = ({ description }: DescriptionProps) => {
  return (
    <div className='flex flex-col gap-1.5 border-b border-gray-accent7 p-4 text-gray-accent1'>
      <span className='font-bold'>설명</span>
      <p>{description}</p>
    </div>
  );
};

export default GameDescription;

interface GatheringDescriptionProps {
  title: string;
  description: string;
}

const GatheringDescription = ({
  title,
  description,
}: GatheringDescriptionProps) => {
  return (
    <div className='flex w-full flex-col p-5'>
      <span className='text-xl font-bold'>{title}</span>
      <span className='mb-4 mt-1 text-[10px] text-gray-accent3 underline'>
        3시간 전에 작성됨 (10분 전에 수정됨)
      </span>
      <p className='text-sm text-gray-accent2'>{description}</p>
    </div>
  );
};

export default GatheringDescription;

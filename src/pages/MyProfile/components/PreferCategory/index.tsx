import Chip from '@/components/Chip';

const PreferCategory = ({ categories }: { categories: string[] }) => {
  return (
    <div className='flex flex-col gap-2 border-b border-gray-accent7 p-4'>
      <span className='flex gap-1'>
        <span className='font-bold text-gray-accent1'>선호 카테고리</span>
        <span>{categories.length}</span>
      </span>
      <div className='flex flex-wrap gap-2'>
        {categories.map(category => (
          <Chip key={category} size='large'>
            {category}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default PreferCategory;

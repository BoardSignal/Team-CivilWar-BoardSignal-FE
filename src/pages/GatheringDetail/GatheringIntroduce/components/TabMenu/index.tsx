import { useState } from 'react';

interface TabMenuProps {
  tabs: string[];
  onSelectTab: (index: number) => void;
}

const TabMenu = ({ tabs, onSelectTab }: TabMenuProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onSelectTab(index);
  };

  return (
    <div className='flex'>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={` h-[40px] w-full cursor-pointer border-t pt-2 text-center ${activeTab === index ? 'border-b-[5px] border-b-primary text-primary' : ' text-gray-accent4'}`}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabMenu;

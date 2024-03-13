import { ChangeEvent, useState } from 'react';

import Button from '@/components/Button';
import Label from '@/components/Label';
import LocationSelect from '@/components/LocationSelect';
import Select from '@/components/Select';
import SubwaySelect from '@/components/SubwaySelect';
import TabBar from '@/components/TabBar';
import Alert from '@/components/alert';
import { TIME_PICKER_OPTIONS } from '@/constants/times';

const TIME_PICKER_PLACEHOLDER = '시간 선택';

const GatheringFixPage = () => {
  const [selectTimeValue, setSelectTimeValue] = useState('');
  const [selectSubwayValue, setSelectSubwayValue] = useState('');
  const [selectLocationValue, setSelectLocationValue] = useState('');

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <span>모임</span>
        </TabBar.Left>
      </TabBar.Container>
      <div className='flex h-full grow flex-col gap-8 px-4'>
        <div className='-mb-4'>
          <Alert>모임이 확정된 시작 시각과 장소를 입력해주세요</Alert>
        </div>
        <Label isRequired title='시작 시간'>
          <Select
            options={TIME_PICKER_OPTIONS}
            placeholder={TIME_PICKER_PLACEHOLDER}
            value={selectTimeValue}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setSelectTimeValue(e.target.value)
            }
          />
        </Label>
        <Label title='지하철역' isRequired>
          <SubwaySelect
            value={selectSubwayValue}
            onChange={setSelectSubwayValue}
          />
        </Label>
        <Label title='모임 장소' isRequired>
          <LocationSelect
            value={selectLocationValue}
            onChange={setSelectLocationValue}
          />
        </Label>
      </div>
      <div className='flex p-4'>
        <Button variant='primary' onClick={() => {}}>
          모임 확정하기
        </Button>
      </div>
    </div>
  );
};

export default GatheringFixPage;

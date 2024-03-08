import Button from '@/components/Button';
import Label from '@/components/Label';
import TabBar from '@/components/TabBar';
import TextInputWithIcon from '@/components/TextInputWithIcon';
import Alert from '@/components/alert';

const GatheringFixPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <span>모임</span>
        </TabBar.Left>
      </TabBar.Container>
      <div className='flex h-full grow flex-col'>
        <div className='px-4'>
          <Alert>모임이 확정된 시작 시각과 장소를 입력해주세요</Alert>
        </div>
        <Label title='시작 시각' isRequired={true}>
          <TextInputWithIcon iconId='time-fill' />
        </Label>
        <Label title='지역 (가까운 지하철역)' isRequired={true}>
          <TextInputWithIcon iconId='map-pin-fill' />
        </Label>
        <Label title='보드게임 장소' isRequired={true}>
          <TextInputWithIcon iconId='map-pin-fill' />
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

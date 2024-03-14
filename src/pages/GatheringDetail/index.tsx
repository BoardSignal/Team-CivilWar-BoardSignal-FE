import TabBar from '@/components/TabBar';

const GatheringDetailPage = () => {
  return (
    <TabBar.Container>
      <TabBar.Left>
        <TabBar.GoBackButton />
        <TabBar.Title>{}</TabBar.Title>
      </TabBar.Left>
    </TabBar.Container>
  );
};

export default GatheringDetailPage;

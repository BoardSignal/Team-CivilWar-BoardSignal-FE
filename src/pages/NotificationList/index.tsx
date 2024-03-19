import { Suspense } from 'react';

import ApiErrorBoundary from '@/components/ErrorBoundary/ApiErrorBoundary';
import { GNB } from '@/components/GNB';
import SpinnerFullScreen from '@/components/Spinner/SpinnerFullScreen';
import TabBar from '@/components/TabBar';

import NotificationList from './components/NotificationList';

const NotificationListPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Title>알림</TabBar.Title>
      </TabBar.Container>
      <div className='grow overflow-y-auto overflow-x-hidden'>
        <ApiErrorBoundary>
          <Suspense fallback={<SpinnerFullScreen />}>
            <NotificationList />
          </Suspense>
        </ApiErrorBoundary>
      </div>
      <GNB />
    </div>
  );
};

export default NotificationListPage;

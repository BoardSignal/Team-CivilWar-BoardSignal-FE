import { Toaster } from 'react-hot-toast';

/**
 *  `<RootLayout>`을 기준으로 Toast를 표시할 수 있게 스타일을 커스텀했어요.
 */
const ToastRoot = () => (
  <Toaster
    position='bottom-center'
    containerStyle={{
      position: 'absolute',
      bottom: 80,
      left: 0,
    }}
  />
);

export default ToastRoot;

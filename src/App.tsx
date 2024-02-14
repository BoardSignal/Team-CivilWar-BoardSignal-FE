import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ReactQueryClientProvider } from './ReactQueryClientProvider';
import { router } from './Router';

const App = () => {
  return (
    <ReactQueryClientProvider>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryClientProvider>
  );
};

export default App;

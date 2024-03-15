import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import ResponsiveLayoutWrapper from '@/components/Layout';

import AnimatedRoutes from './AnimatedRoutes';
import { ReactQueryClientProvider } from './ReactQueryClientProvider';

const App = () => (
  <ReactQueryClientProvider>
    <BrowserRouter>
      <ResponsiveLayoutWrapper>
        <AnimatedRoutes />
      </ResponsiveLayoutWrapper>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </ReactQueryClientProvider>
);

export default App;

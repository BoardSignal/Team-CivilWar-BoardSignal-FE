import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import ResponsiveLayoutWrapper from '@/components/Layout';

import { ReactQueryClientProvider } from './ReactQueryClientProvider';
import AnimatedRoutes from './Router';

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

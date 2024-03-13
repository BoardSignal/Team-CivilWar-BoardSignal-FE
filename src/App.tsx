import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import AnimatedRoutes from '@/components/AnimatedRoutes';
import ResponsiveLayoutWrapper from '@/components/Layout';

import { ReactQueryClientProvider } from './ReactQueryClientProvider';
import Router from './Router';

const App = () => (
  <ReactQueryClientProvider>
    <BrowserRouter>
      <ResponsiveLayoutWrapper>
        <AnimatedRoutes>
          <Router />
        </AnimatedRoutes>
      </ResponsiveLayoutWrapper>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </ReactQueryClientProvider>
);

export default App;

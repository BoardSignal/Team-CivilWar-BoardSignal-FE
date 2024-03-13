import { PropsWithChildren } from 'react';

import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AnimtedRoutes = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        classNames='fade-page-transition'
        timeout={300}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimtedRoutes;

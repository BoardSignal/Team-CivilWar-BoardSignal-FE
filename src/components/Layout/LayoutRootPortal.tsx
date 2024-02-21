import { PropsWithChildren, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import { LAYOUT_ROOT_ID } from '.';

/**
 * 루트 레이아웃 요소의 하위에 렌더링하기 위한 Portal 이에요.
 *
 * h-screen을 대신 h-full을 사용하기 위해 만들어졌어요.
 *
 * h-full을 사용하는 이유는 Story에서 높이를 지정하기 위함이에요.
 */
const LayoutRootPortal = ({ children }: PropsWithChildren) => {
  const [isRendered, setIsRendered] = useState(false);

  /*
    useEffect를 활용해 최초 마운트 시 대기해요.
    Layout Root 역시 React DOM 내의 요소이기 때문이에요.
    Mount 될 때까지 대기한 후 getElementById를 호출해야 해요.
  */
  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (!isRendered) {
    return null;
  }

  const layoutElement = document.getElementById(LAYOUT_ROOT_ID);

  if (!layoutElement) {
    throw new Error('LayoutRootPortal: No root element found');
  }

  return createPortal(children, layoutElement);
};

export default LayoutRootPortal;

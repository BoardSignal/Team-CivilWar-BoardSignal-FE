import { Children, ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { useNavigate } from 'react-router-dom';

import Icon from '../Icon';

/**
 * TabBar를 구성하는 요소에요.
 *
 * 간결함과 확장성을 위해서 Compound Pattern으로 개발했어요.
 *
 * 자식은 최대 2개까지만 렌더링해요.
 * 자식으로는 <TabBar.Left>, <TabBar.Right>를 사용해주세요.
 *
 * 사용 예시
 * @example
 * <TabBar.Container>
 *   <TabBar.Left>
 *     <TabBar.GoBackButton />
 *     <TabBar.Title>안녕하세요</TabBar.Title>
 *   </TabBar.Left>
 *   <TabBar.Right>
 *     <TabBar.ShareButton onClick={...} />
 *   </TabBar.Right>
 * </TabBar.Container>
 */
const Container = ({ children: rawChildren }: PropsWithChildren) => {
  const [leftChildren, rightChildren] = Children.toArray(rawChildren);

  return (
    <div className='flex justify-between border-b border-gray-accent7 px-4 py-2 text-gray-accent1'>
      {leftChildren}
      {rightChildren}
    </div>
  );
};

const Left = ({ children }: PropsWithChildren) => (
  <div className='flex items-center gap-1'>{children}</div>
);

const Right = ({ children }: PropsWithChildren) => (
  <div className='flex items-center gap-4'>{children}</div>
);

const Title = ({ children }: PropsWithChildren) => (
  <div className='cursor-default font-bold'>{children}</div>
);

type HTMLButtonProps = ComponentPropsWithoutRef<'button'>;

const GoBackButton = ({ onClick, ...props }: HTMLButtonProps) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button onClick={onClick || goBack} {...props}>
      <Icon id='arrow-left-line' size={24} className='-ml-2' />
    </button>
  );
};

const ChatButton = (props: HTMLButtonProps) => (
  <button {...props}>
    <Icon id='chat-line' />
  </button>
);

const ShareButton = (props: HTMLButtonProps) => (
  <button {...props}>
    <Icon id='share-line' />
  </button>
);

const SettingsButton = (props: HTMLButtonProps) => (
  <button {...props}>
    <Icon id='settings-line' />
  </button>
);

const SearchButton = (props: HTMLButtonProps) => (
  <button {...props}>
    <Icon id='search-line' />
  </button>
);

const LogoutButton = (props: HTMLButtonProps) => (
  <button {...props}>
    <Icon id='logout-line' />
  </button>
);

const TabBar = {
  Container,
  Left,
  Right,
  Title,
  GoBackButton,
  ChatButton,
  ShareButton,
  SettingsButton,
  SearchButton,
  LogoutButton,
};

export default TabBar;

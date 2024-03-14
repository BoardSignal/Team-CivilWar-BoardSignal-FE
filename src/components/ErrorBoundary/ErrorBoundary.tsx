import { Component, ComponentType, PropsWithChildren } from 'react';

import { type ErrorAlertFullScreenProps } from '../ErrorAlertFullScreen';
import UnknownErrorAlertFullScreen from '../ErrorAlertFullScreen/UnknownErrorAlertFullScreen';

export interface ErrorBoundaryProps extends PropsWithChildren {
  onReset?: () => void;
  onCatch?: (error: unknown) => void;
  fallback?: ComponentType<ErrorAlertFullScreenProps>;
}

interface State {
  error: unknown;
  isError: boolean;
}

const defaultState = {
  error: undefined,
  isError: false,
};

/**
 * 자식 컴포넌트에서 오류를 잡는 경우 `fallback prop`을 대신 표시해요.
 *
 * 오류를 더 상위 ErrorBoundary에서 처리하게 만드려면 `onCatch`에서 throw를 할 수 있어요.
 */
export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  State
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = defaultState;

    this.resetErrorState = this.resetErrorState.bind(this);
  }

  resetErrorState() {
    this.props.onReset?.();
    this.setState(defaultState);
  }

  componentDidCatch(error: unknown) {
    this.props.onCatch?.(error);
    this.setState({ error, isError: true });
  }

  render() {
    const { error, isError } = this.state;
    const { children, fallback: Fallback = UnknownErrorAlertFullScreen } =
      this.props;

    if (!isError) {
      return children;
    }

    return <Fallback error={error} onReset={this.resetErrorState} />;
  }
}

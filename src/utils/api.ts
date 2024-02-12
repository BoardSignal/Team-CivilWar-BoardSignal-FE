import { LoginResponse } from './types';

export class API {
  private static api = async <T>(path: string, init?: RequestInit) => {
    const url = `https://api.example.com/api/v1${path}`;
    const response = await fetch(url, init);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data as T;
  };

  public static kakaoLogin = () =>
    API.api<LoginResponse>(`/auth/login/kakao`, { method: 'POST' });

  public static naverLogin = () =>
    API.api<LoginResponse>('/auth/login/naver', { method: 'POST' });

  public static reissueAccessToken = (tokenIndex: string) =>
    API.api(`/auth/reissue/${tokenIndex}`, { method: 'POST' });
  /**
   * API 명세가 아직 불분명하게 나와서 주석을 포함해놓았습니다.
   * 추후에 API 명세가 나오면 주석을 제거하고 요청코드를 마무리하겠습니다.
   */
}

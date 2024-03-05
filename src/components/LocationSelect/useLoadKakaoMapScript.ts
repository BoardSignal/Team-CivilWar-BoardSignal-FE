import { useSuspenseQuery } from '@tanstack/react-query';

import {
  KakaoMapSearchAPI,
  KakaoMapSearchFunction,
  KakaoMapSearchResult,
} from '@/apis/types/KakaoMapSearch';
import '@/apis/types/KakaoMapSearch.d.ts';

const KAKAO_MAP_ACCESS_KEY =
  import.meta.env.STORYBOOK_KAKAO_MAP_ACCESS_KEY ||
  import.meta.env.VITE_KAKAO_MAP_ACCESS_KEY;

/**
 * http 여부에 따라 url을 지정해요.
 *
 * Storybook에선 full url로 지정하지 않으면 상대 경로로 지정되어서 어쩔 수 없이 직접 해요.
 */
const getSDKUrl = (accessKey: string) => {
  const isHttps = window.location.href.includes('https');
  const protocol = isHttps ? 'https' : 'http';

  return `${protocol}://dapi.kakao.com/v2/maps/sdk.js?appkey=${accessKey}&libraries=services&autoload=false`;
};

/**
 * Callback 방식의 카카오 검색 함수를 async/await에서 사용할 수 있게 변환해요.
 */
const promisifySearchFunction =
  (searchFunction: KakaoMapSearchAPI) => (keyword: string, pageParam: number) =>
    new Promise<KakaoMapSearchResult>((resolve, reject) => {
      searchFunction(
        keyword,
        (data, status, page) => {
          if (status === 'ERROR') {
            return reject(data);
          }
          resolve({
            data,
            page,
          });
        },
        {
          page: pageParam,
        },
      );
    });

/**
 * 카카오맵 SDK를 로딩하고 장소 검색 함수를 반환해요.
 *
 * 로딩은 2단계로 구성되어 있어요.
 * - SDK를 가져오기
 * - SDK의 load 함수를 호출하기
 */
const loadKakaoMapSearchScript = (accessKey: string) =>
  new Promise<KakaoMapSearchFunction>(resolve => {
    const loaderScriptTag = document.createElement('script');
    loaderScriptTag.src = getSDKUrl(accessKey);

    loaderScriptTag.addEventListener('load', () => {
      const kakaoLoader = window.kakao.maps;

      kakaoLoader.load(() => {
        const searchInstance = new kakaoLoader.services.Places();
        const searchFunction = searchInstance.keywordSearch;
        const promisified = promisifySearchFunction(searchFunction);

        resolve(promisified);
      });
    });

    document.head.appendChild(loaderScriptTag);
  });

/**
 * 카카오 장소 검색 함수를 반환해요.
 *
 * 카카오 장소 검색 API를 사용하기 위한 스크립트를 동적으로 불러와요.
 *
 * 세션 동안은 다시 불러올 필요가 없어 stale, gc를 비활성화했어요.
 */
const useLoadKakaoMapScript = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['kakao-map-search-script'],
    queryFn: () => loadKakaoMapSearchScript(KAKAO_MAP_ACCESS_KEY),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return {
    kakaoMapSearch: data,
  };
};

export default useLoadKakaoMapScript;

/**
 * Kakao SDK가 생성하는 객체의 타입 일부에요.
 */
declare global {
  interface Window {
    kakao: {
      maps: {
        load: (cb: () => void) => void;
        services: {
          Places: {
            new (): {
              keywordSearch: KakaoMapSearchAPI;
            };
          };
        };
      };
    };
  }
}

/**
 * 카카오 맵 검색 API 콜백 함수 타입이에요.
 */
export type KakaoMapSearchAPI = (
  keyword: string,
  placesSearchCallback: (
    data: KakaoMapSearchAPIResponse[],
    status: 'OK' | 'ERROR' | 'ZERO_RESULT',
    page: KakaoPagination,
  ) => void,
  options: {
    page: number;
  },
) => void;

export interface KakaoMapSearchResult {
  data: KakaoMapSearchAPIResponse[];
  page: KakaoPagination;
}

export interface KakaoMapSearchAPIResponse {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

/**
 * 카카오 맵 API 응답의 일부인 pagination 객체 타입이에요.
 */
export interface KakaoPagination {
  totalCount: number;
  perPage: number;
  current: number;
  first: number;
  last: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  gotoFirst: () => void;
  gotoLast: () => void;
  gotoPage: (page: number) => void;
  prevPage: () => void;
}

/**
 * 직접 제작한 카카오 맵 검색 함수(async function)에요.
 */
export type KakaoMapSearchFunction = (
  keyword: string,
  page: number,
) => Promise<KakaoMapSearchResult>;

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import {
  KakaoMapSearchAPIResponse,
  LocationItem,
} from '@/apis/types/KakaoMapSearch';

import { useGetKakaoMapScript } from './kakaoMapScript';

/**
 * 카카오 API 응답 객체의 snakeCase 프로퍼티들을 camelCase로 변환해요.
 */
const convertSearchApiResponse = ({
  id,
  place_name,
  category_group_name,
  address_name,
  road_address_name,
  phone,
}: KakaoMapSearchAPIResponse): LocationItem => ({
  id,
  name: place_name,
  type: category_group_name,
  newFormatAddress: road_address_name,
  oldFormatAddress: address_name,
  phoneNumber: phone,
});

export const useGetKakaoMapSearchApi = (searchTerm: string) => {
  const { kakaoMapSearch } = useGetKakaoMapScript();

  const {
    data: { pages },
    hasNextPage,
    fetchStatus,
    fetchNextPage,
  } = useSuspenseInfiniteQuery({
    queryKey: ['locations', 'infinite', searchTerm],
    queryFn: ({ pageParam: page }) => kakaoMapSearch(searchTerm, page),
    initialPageParam: 1,
    // Next Page가 없는 경우 undefined를 반환해야 한다고 해요.
    getNextPageParam: ({ page: { current, last } }) =>
      current < last ? current + 1 : undefined,
  });

  const allPagesMerged = pages
    .flatMap(page => page.data)
    .map(convertSearchApiResponse);

  const totalCount = pages?.[0].page.totalCount ?? 0;

  return {
    locations: allPagesMerged,
    totalCount,
    hasNextPage,
    fetchStatus,
    fetchNextPage,
  };
};

import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import { mixed, object, string } from 'yup';

import InvalidStatePageError from '@/components/ErrorAlertFullScreen/NotFoundErrorAlertFullScreen/InvalidStatePageError';

/**
 * QueryString의 validation의 기준이 되는 객체에요.
 *
 * categories: string일 때 string[]로 만들어요.
 * playTime: string일 때 number로 만들어요. 결과가 NaN이면 실패해요.
 * noUnknown: 정의되지 않은 프로퍼티를 금지해요
 * strict: 실패 시 빈 객체가 아닌 throw를 하게 해요.
 */
const querySchema = object({
  difficulty: string(),
  categories: mixed<string[]>().transform(value =>
    value instanceof Array ? value : [value],
  ),
  playTime: mixed<number>().transform(value => parseInt(value, 10)),
  searchKeyword: string(),
})
  .noUnknown()
  .strict();

/**
 * queryString을 파싱하고 valid 하지 않으면 InvalidStatePageError 예외를 발생시켜요.
 *
 * 정상인 경우 값을 반환해요.
 */
export const useBoardGameListQueryParams = () => {
  const [searchParams] = useSearchParams();
  const queryObject = qs.parse(searchParams.toString());

  let options;
  try {
    options = querySchema.validateSync(queryObject);
  } catch {
    throw new InvalidStatePageError();
  }

  return options;
};

import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import { mixed, object, string } from 'yup';

import InvalidStatePageError from '@/components/ErrorAlertFullScreen/NotFoundErrorAlertFullScreen/InvalidStatePageError';

/**
 * QueryString의 validation의 기준이 되는 객체에요.
 *
 * station, time, category: string일 때 string[]로 만들어요.
 * noUnknown: 정의되지 않은 프로퍼티를 금지해요
 * strict: 실패 시 빈 객체가 아닌 throw를 하게 해요.
 */
const querySchema = object({
  station: mixed<string[]>().transform(value =>
    value instanceof Array ? value : [value],
  ),
  time: mixed<string[]>().transform(value =>
    value instanceof Array ? value : [value],
  ),
  category: mixed<string[]>().transform(value =>
    value instanceof Array ? value : [value],
  ),
  gender: string(),
  searchKeyword: string(),
})
  .noUnknown()
  .strict();

/**
 * queryString을 파싱하고 valid 하지 않으면 InvalidStatePageError 예외를 발생시켜요.
 *
 * 정상인 경우 값을 반환해요.
 */
export const useGatheringListQueryParams = () => {
  const [searchParams] = useSearchParams();
  const queryObject = qs.parse(searchParams.toString().replace(/\+/g, '_'));

  let options;
  try {
    options = querySchema.validateSync(queryObject);
  } catch {
    throw new InvalidStatePageError();
  }

  return options;
};

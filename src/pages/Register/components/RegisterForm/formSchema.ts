import { yupResolver } from '@hookform/resolvers/yup';
import { array, boolean, mixed, object, string } from 'yup';

import {
  MAX_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  TRIM_ERROR_MESSAGE,
} from '@/constants/messages/error';

export const registerSchema = object({
  profileImageUrl: mixed<File>().required(),
  nickname: string()
    .required(REQUIRED_ERROR_MESSAGE)
    .trim()
    .min(2, `${TRIM_ERROR_MESSAGE} 2${MIN_LENGTH_ERROR_MESSAGE}`)
    .max(10, `10${MAX_LENGTH_ERROR_MESSAGE}`),
  subwayLine: string().defined(),
  subwayStation: string().required(REQUIRED_ERROR_MESSAGE),
  categories: array(string().defined()).required(),
  isAgreeTerms: boolean().required(),
  isAgreeMarketing: boolean().defined(),
});

export const registerDefaultValue = {
  profileImageUrl: new File([], ''),
  nickname: '',
  subwayLine: '2호선',
  subwayStation: '',
  categories: [],
  isAgreeTerms: false,
  isAgreeMarketing: false,
};

export const registerFormOptions = {
  mode: 'all',
  defaultValues: registerDefaultValue,
  resolver: yupResolver(registerSchema),
} as const;

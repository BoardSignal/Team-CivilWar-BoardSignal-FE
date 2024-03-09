import { yupResolver } from '@hookform/resolvers/yup';
import { array, boolean, mixed, number, object, string } from 'yup';

import {
  MAX_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  TRIM_ERROR_MESSAGE,
} from '@/constants/messages/error';

export const gatheringCreateSchema = object({
  thumbnailImage: mixed<File>().required(),
  roomTitle: string()
    .required(REQUIRED_ERROR_MESSAGE)
    .trim()
    .min(2, `${TRIM_ERROR_MESSAGE}2${MIN_LENGTH_ERROR_MESSAGE}`)
    .max(50, `50${MAX_LENGTH_ERROR_MESSAGE}`),
  description: string()
    .required(REQUIRED_ERROR_MESSAGE)
    .trim()
    .min(2, `${TRIM_ERROR_MESSAGE}2${MIN_LENGTH_ERROR_MESSAGE}`)
    .max(500, `500${MAX_LENGTH_ERROR_MESSAGE}`),
  isArrowedSameGender: boolean().required(),
  headcount: array(number().required()).required().length(2),
  time: string().required(REQUIRED_ERROR_MESSAGE),
  startTime: string().defined(),
  age: array(number().required()).required().length(2),
  subwayLine: string().defined(),
  subwayStation: string().required(REQUIRED_ERROR_MESSAGE),
  place: string().defined(),
  categories: array(string().defined()).required(),
});

export const gatheringCreateDefaultValue = {
  thumbnailImage: new File([], ''),
  roomTitle: '',
  description: '',
  isArrowedSameGender: false,
  headcount: [1, 8],
  time: '',
  startTime: '',
  // 사용자의 나이는 폼 컴포넌트에서 반영해요.
  age: [10, 40],
  subwayLine: '',
  subwayStation: '',
  place: '',
  categories: [],
};

export const gatheringCreateFormOptions = {
  mode: 'all',
  defaultValues: gatheringCreateDefaultValue,
  resolver: yupResolver(gatheringCreateSchema),
} as const;

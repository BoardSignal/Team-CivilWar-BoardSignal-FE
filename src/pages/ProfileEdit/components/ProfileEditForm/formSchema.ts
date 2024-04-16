import { array, mixed, object, string } from 'yup';

import {
  MAX_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  TRIM_ERROR_MESSAGE,
} from '@/constants/messages/error';

export const profileEditSchema = object({
  profileImageUrl: mixed<File>().required(),
  nickname: string()
    .required(REQUIRED_ERROR_MESSAGE)
    .trim()
    .min(2, `${TRIM_ERROR_MESSAGE} 2${MIN_LENGTH_ERROR_MESSAGE}`)
    .max(10, `10${MAX_LENGTH_ERROR_MESSAGE}`),
  station: string().defined(),
  categories: array(string().defined()).required(),
  gender: string().required(REQUIRED_ERROR_MESSAGE),
  birth: string().required(REQUIRED_ERROR_MESSAGE),
});

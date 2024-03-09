import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import {
  MAX_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  TRIM_ERROR_MESSAGE,
} from '@/constants/messages/error';

export const createBoardGameTipSchema = object({
  content: string()
    .required(REQUIRED_ERROR_MESSAGE)
    .trim()
    .min(2, `${TRIM_ERROR_MESSAGE}2${MIN_LENGTH_ERROR_MESSAGE}`)
    .max(500, `50${MAX_LENGTH_ERROR_MESSAGE}`),
});

export const createBoardGameTipDefaultValue = {
  content: '',
};

export const createBoardGameTipFormOptions = {
  mode: 'all',
  defaultValues: createBoardGameTipDefaultValue,
  resolver: yupResolver(createBoardGameTipSchema),
} as const;

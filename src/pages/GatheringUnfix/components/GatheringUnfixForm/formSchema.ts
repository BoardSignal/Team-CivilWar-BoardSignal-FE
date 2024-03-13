import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import {
  MAX_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  TRIM_ERROR_MESSAGE,
} from '@/constants/messages/error';

const gatheringUnfixSchema = object({
  reason: string()
    .required(REQUIRED_ERROR_MESSAGE)
    .trim()
    .min(2, `${TRIM_ERROR_MESSAGE} 2${MIN_LENGTH_ERROR_MESSAGE}`)
    .max(50, `50${MAX_LENGTH_ERROR_MESSAGE}`),
});

export const gatheringUnfixFormOptions = {
  mode: 'all',
  defaultValues: { reason: '' },
  resolver: yupResolver(gatheringUnfixSchema),
} as const;

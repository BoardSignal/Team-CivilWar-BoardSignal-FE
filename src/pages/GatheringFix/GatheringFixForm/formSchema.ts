import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { REQUIRED_ERROR_MESSAGE } from '@/constants/messages/error';

export interface GatheringFixFormValues {
  time: string;
  date: string;
  subwayStation: string;
  place: string;
}

export const gatheringFixSchema = object({
  time: string().required(REQUIRED_ERROR_MESSAGE),
  date: string().required(REQUIRED_ERROR_MESSAGE),
  subwayStation: string().required(REQUIRED_ERROR_MESSAGE),
  place: string().required(REQUIRED_ERROR_MESSAGE),
});

export const gatheringFixDefaultValue = {
  time: '',
  date: '',
  subwayStation: '',
  place: '',
};

export const gatheringFixFormOptions = {
  mode: 'all',
  defaultValues: gatheringFixDefaultValue,
  resolver: yupResolver(gatheringFixSchema),
} as const;

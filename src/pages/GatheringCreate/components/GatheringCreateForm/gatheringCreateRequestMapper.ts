import { BOARDGAME_CATEGORIES } from '@/constants/options';
import {
  extractLineFromSubwayName,
  extractStationFromSubwayName,
} from '@/utils/extractFromSubwayName';

export interface GatheringCreateFormValues {
  thumbnailImage: File;
  title: string;
  description: string;
  isArrowedSameGender: boolean;
  headcount: number[];
  time: string;
  startTime: string;
  age: number[];
  station: string;
  place: string;
  categories: string[];
}

const gatheringCreateRequestMapper = (data: GatheringCreateFormValues) => {
  const {
    thumbnailImage: imageFile,
    isArrowedSameGender,
    headcount: [minParticipants, maxParticipants],
    time,
    age: [minAge, maxAge],
    categories,
    station,
    ...restGathering
  } = data;

  const gathering = {
    isAllowedOppositeGender: !isArrowedSameGender,
    minParticipants,
    maxParticipants,
    day: time.split(' ')[0],
    time: time.split(' ')[1],
    minAge,
    maxAge,
    subwayLine: extractLineFromSubwayName(station),
    subwayStation: extractStationFromSubwayName(station),
    categories:
      categories.length === 0 ? [...BOARDGAME_CATEGORIES] : categories,
    ...restGathering,
  };

  return {
    imageFile,
    gathering,
  };
};

export default gatheringCreateRequestMapper;

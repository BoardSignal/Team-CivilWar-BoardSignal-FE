import {
  extractLineFromSubwayName,
  extractStationFromSubwayName,
} from '@/utils/extractFromSubwayName';

export interface RegisterFormValue {
  profileImageUrl: File;
  nickname: string;
  station: string;
  categories: string[];
  isAgreeTerms: boolean;
  isAgreeMarketing: boolean;
}

const registerRequestMapper = (data: RegisterFormValue) => {
  const { nickname: nickName, station, categories, profileImageUrl } = data;

  return {
    profileImageUrl,
    userProfile: {
      nickName,
      line: extractLineFromSubwayName(station),
      station: extractStationFromSubwayName(station),
      categories,
    },
  };
};

export default registerRequestMapper;

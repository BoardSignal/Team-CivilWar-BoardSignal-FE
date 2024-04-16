import {
  extractLineFromSubwayName,
  extractStationFromSubwayName,
} from '@/utils/extractFromSubwayName';

export interface ProfileEditFormValue {
  profileImageUrl: File;
  nickname: string;
  gender: string;
  birth: string;
  station: string;
  categories: string[];
}

const ProfileEditRequestMapper = (data: ProfileEditFormValue) => {
  const {
    nickname: nickName,
    birth,
    gender,
    station,
    categories,
    profileImageUrl,
  } = data;

  return {
    profileImageUrl,
    userProfile: {
      nickName,
      gender,
      birth,
      line: extractLineFromSubwayName(station),
      station: extractStationFromSubwayName(station),
      categories,
    },
  };
};

export default ProfileEditRequestMapper;

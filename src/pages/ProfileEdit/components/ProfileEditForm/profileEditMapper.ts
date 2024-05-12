import {
  extractLineFromSubwayName,
  extractStationFromSubwayName,
} from '@/utils/extractFromSubwayName';

export interface ProfileEditFormValue {
  profileImageUrl: File;
  nickname: string;
  station: string;
  categories: string[];
}

export interface ProfileFormValue extends ProfileEditFormValue {
  gender: string;
  birth: string;
}

const ProfileEditRequestMapper = (data: ProfileFormValue) => {
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

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

const ProfileEditRequestMapper = (data: ProfileEditFormValue) => {
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

export default ProfileEditRequestMapper;

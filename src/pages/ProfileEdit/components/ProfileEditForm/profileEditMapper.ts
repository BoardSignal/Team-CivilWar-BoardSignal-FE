export interface ProfileEditFormValue {
  profileImageUrl: File;
  nickname: string;
  subwayLine: string;
  subwayStation: string;
  categories: string[];
}

const ProfileEditRequestMapper = (data: ProfileEditFormValue) => {
  const {
    nickname: nickName,
    subwayLine: line,
    subwayStation: station,
    categories,
    profileImageUrl,
  } = data;

  return {
    profileImageUrl,
    userProfile: {
      nickName,
      line,
      station,
      categories,
    },
  };
};

export default ProfileEditRequestMapper;

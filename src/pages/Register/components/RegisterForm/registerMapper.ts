export interface RegisterFormValue {
  profileImageUrl: File;
  nickname: string;
  subwayLine: string;
  subwayStation: string;
  categories: string[];
  isAgreeTerms: boolean;
  isAgreeMarketing: boolean;
}

const registerRequestMapper = (data: RegisterFormValue) => {
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

export default registerRequestMapper;

interface SignedUser {
  signed: true;
  accessToken: string;
  refreshTokenIndex: string;
}

interface UnSignedUser {
  signed: false;
  userData: string;
}

export type LoginResponse = SignedUser | UnSignedUser;

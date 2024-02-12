import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string) => {
  cookies.set(name, value, {
    path: '/',
    maxAge: 60 * 60 * 24 * 14,
    httpOnly: true,
    secure: false,
  });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  cookies.remove(name);
};

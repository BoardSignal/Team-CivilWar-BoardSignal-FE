export const convertToRelativeTime = (date: string) => {
  const now = new Date();
  const createdAt = new Date(Date.parse(date));
  const difference = (now.getTime() - createdAt.getTime()) as number;

  const ONE_MINUTE = 60 * 1000;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;
  const ONE_WEEK = 7 * ONE_DAY;
  const ONE_MONTH = 30 * ONE_DAY;

  if (difference < ONE_MINUTE) return '방금 전';
  if (difference < ONE_HOUR)
    return `${Math.floor(difference / ONE_MINUTE)}분 전`;
  if (difference < ONE_DAY)
    return `${Math.floor(difference / ONE_HOUR)}시간 전`;
  if (difference < ONE_WEEK) return `${Math.floor(difference / ONE_DAY)}일 전`;
  if (difference < ONE_MONTH)
    return `${Math.floor(difference / ONE_WEEK)}주 전`;
  return createdAt.toLocaleDateString();
};

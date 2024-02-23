export const getTimeDifferenceString = (date: string) => {
  const now = new Date();
  const createdAt = new Date(Date.parse(date));
  const difference = (now.getTime() - createdAt.getTime()) as number;

  if (difference < 60000) return '방금 전';
  if (difference < 3600000) return `${Math.floor(difference / 60000)}분 전`;
  if (difference < 86400000)
    return `${Math.floor(difference / 3600000)}시간 전`;
  if (difference < 604800000)
    return `${Math.floor(difference / 86400000)}일 전`;
  if (difference < 2592000000)
    return `${Math.floor(difference / 604800000)}주 전`;
  return createdAt.toLocaleDateString();
};

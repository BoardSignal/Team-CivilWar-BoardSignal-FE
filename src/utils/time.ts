type TimeUnits = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute';
type MinutesPerTimeUnit = {
  unit: TimeUnits;
  minutes: number;
};
type DateStyle = 'full' | 'long' | 'medium' | 'short' | undefined;

const MINUTES_PER_TIME_UNIT: MinutesPerTimeUnit[] = [
  { unit: 'year', minutes: 60 * 24 * 365 },
  { unit: 'month', minutes: 60 * 24 * 30 },
  { unit: 'week', minutes: 60 * 24 * 7 },
  { unit: 'day', minutes: 60 * 24 },
  { unit: 'hour', minutes: 60 },
  { unit: 'minute', minutes: 1 },
];

const validateDateTime = (dateTime: string) => {
  if (!new Date(dateTime).getTime()) {
    throw new Error('Invalid Date');
  }
};

export const getRemainDay = (dateTime: string) => {
  validateDateTime(dateTime);

  const pastTime = new Date(dateTime.split('T')[0]).getTime();
  const currentTime = new Date(
    new Date().toISOString().split('T')[0],
  ).getTime();

  return Math.floor(
    (currentTime - pastTime) / (MINUTES_PER_TIME_UNIT[3].minutes * 60000),
  );
};

export const formatToDateTime = (
  dateTime: string,
  dateStyle: DateStyle = 'full',
) => {
  validateDateTime(dateTime);

  const timeZone = /Z/.test(dateTime) ? 'Etc/GMT' : 'Asia/Seoul';

  new Intl.DateTimeFormat('ko-KR', {
    dateStyle,
    timeStyle: 'short',
    timeZone,
  }).format(new Date(dateTime));
};

export const formatToTime = (dateTime: string) =>
  new Intl.DateTimeFormat('ko-KR', {
    timeStyle: 'short',
  }).format(new Date(dateTime));

export const formatToDate = (dateTime: string) =>
  new Intl.DateTimeFormat('ko-KR').format(new Date(dateTime));

export const isDifferentDay = (current: string, previous: string) => {
  validateDateTime(current);
  validateDateTime(previous);

  if (formatToDate(current) === formatToDate(previous)) {
    return false;
  }

  return true;
};

export const formatToTimeUntilTodayThenDate = (dateTime: string) => {
  validateDateTime(dateTime);

  return isDifferentDay(dateTime, String(new Date()))
    ? formatToDate(dateTime)
    : formatToTime(dateTime);
};

const getMinutesDifferenceFromNow = (dateTime: string) => {
  validateDateTime(dateTime);

  return (new Date().getTime() - new Date(dateTime).getTime()) / 60000;
};

const getRelativeTime = (dateTime: string) => {
  const minutesDifference = getMinutesDifferenceFromNow(dateTime);

  const formatter = new Intl.RelativeTimeFormat('ko', {
    numeric: 'always',
  });

  for (const { unit, minutes } of MINUTES_PER_TIME_UNIT) {
    const calculatedTime = Math.floor(minutesDifference / minutes);

    if (calculatedTime > 0) {
      return formatter.format(calculatedTime * -1, unit);
    }
  }

  return '방금 전';
};

/**
 * dateTime은 yyyy-mm-ddThh:mm:ss, yyyy/mm/dd hh:mm:ss 포맷만 가능합니다.
 *
 * limit은 상대적 시간을 표시하는 지속 기간으로, 일(day) 단위입니다.
 */
export const getRelativeTimeWithin = (dateTime: string, limit?: number) => {
  const minutesDifference = getMinutesDifferenceFromNow(dateTime);

  if (
    limit !== undefined &&
    minutesDifference >= limit * MINUTES_PER_TIME_UNIT[3].minutes
  ) {
    return new Intl.DateTimeFormat('ko-KR').format(new Date(dateTime));
  }

  return getRelativeTime(dateTime);
};

export const formatToDateTime = (
  dateTime: string,
  dateStyle: DateStyle = 'full',
) =>
  new Intl.DateTimeFormat('ko-KR', {
    dateStyle,
    timeStyle: 'short',
    timeZone: 'Asia/Seoul',
  }).format(new Date(dateTime));

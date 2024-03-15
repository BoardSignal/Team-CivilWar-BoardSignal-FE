type TimeUnits = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute';
type MinutesPerTimeUnit = {
  unit: TimeUnits;
  minutes: number;
};

const MINUTES_PER_TIME_UNIT: MinutesPerTimeUnit[] = [
  { unit: 'year', minutes: 60 * 24 * 365 },
  { unit: 'month', minutes: 60 * 24 * 30 },
  { unit: 'week', minutes: 60 * 24 * 7 },
  { unit: 'day', minutes: 60 * 24 },
  { unit: 'hour', minutes: 60 },
  { unit: 'minute', minutes: 1 },
];

const validateTime = (time: string) => {
  if (!new Date(time).getTime()) {
    throw new Error('Invalid Date');
  }
};

export const getShortTime = (time: string) => {
  return new Intl.DateTimeFormat('ko-KR', {
    timeStyle: 'short',
  }).format(new Date(time));
};

export const getFullDate = (time: string) => {
  return new Intl.DateTimeFormat('ko-KR').format(new Date(time));
};

export const isDifferentDay = (current: string, previous: string) => {
  validateTime(current);
  validateTime(previous);

  if (getFullDate(current) === getFullDate(previous)) {
    return false;
  }

  return true;
};

export const displayTimeUntilToday = (time: string) => {
  validateTime(time);

  return isDifferentDay(time, String(new Date()))
    ? getFullDate(time)
    : getShortTime(time);
};

const getMinutesDifferenceFromNow = (time: string) => {
  if (!new Date(time).getTime()) {
    throw new Error('Invalid Date');
  }

  return (new Date().getTime() - new Date(time).getTime()) / 60000;
};

const getRelativeTime = (time: string) => {
  const minutesDifference = getMinutesDifferenceFromNow(time);

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
 * time은 yyyy-mm-ddThh:mm:ss, yyyy/mm/dd hh:mm:ss 포맷만 가능합니다.
 *
 * limit은 상대적 시간을 표시하는 지속 기간으로, 일(day) 단위입니다.
 */
export const getRelativeTimeWithin = (time: string, limit?: number) => {
  const minutesDifference = getMinutesDifferenceFromNow(time);

  if (
    limit !== undefined &&
    minutesDifference >= limit * MINUTES_PER_TIME_UNIT[3].minutes
  ) {
    return new Intl.DateTimeFormat('ko-KR').format(new Date(time));
  }

  return getRelativeTime(time);
};

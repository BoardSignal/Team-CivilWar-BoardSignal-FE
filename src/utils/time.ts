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

interface GetRelativeTimeProps {
  time: string;
  duration?: number;
}

/**
 * time은 yyyy-mm-ddThh:mm:ss, yyyy/mm/dd hh:mm:ss 포맷만 가능합니다.
 * duration은 상대적 시간을 표시하는 지속 기간으로, 단위는 일(day)입니다.
 */
export const getRelativeTime = ({ time, duration }: GetRelativeTimeProps) => {
  const minutesDifference =
    (new Date().getTime() - new Date(time).getTime()) / 60000;

  if (
    duration !== undefined &&
    minutesDifference >= duration * MINUTES_PER_TIME_UNIT[3].minutes
  ) {
    return new Intl.DateTimeFormat('ko-KR').format(new Date(time));
  }

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

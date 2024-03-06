type TimeUnits = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute';
type MinutesPerTimeUnit = {
  unit: TimeUnits;
  minutes: number;
};

export const getRelativeTime = (time: string) => {
  const formatter = new Intl.RelativeTimeFormat('ko', {
    numeric: 'always',
  });

  const minutesDifference =
    (new Date().getTime() - new Date(time).getTime()) / 60000;

  const MINUTES_PER_TIME_UNIT: MinutesPerTimeUnit[] = [
    { unit: 'year', minutes: 60 * 24 * 365 },
    { unit: 'month', minutes: 60 * 24 * 30 },
    { unit: 'week', minutes: 60 * 24 * 7 },
    { unit: 'day', minutes: 60 * 24 },
    { unit: 'hour', minutes: 60 },
    { unit: 'minute', minutes: 1 },
  ];

  for (const { unit, minutes } of MINUTES_PER_TIME_UNIT) {
    const calculatedTime = Math.floor(minutesDifference / minutes);

    if (calculatedTime > 0) {
      return formatter.format(calculatedTime * -1, unit);
    }
  }

  return '방금 전';
};

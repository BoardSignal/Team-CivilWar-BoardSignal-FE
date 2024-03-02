type TimeUnits = 'year' | 'month' | 'day' | 'hour' | 'minute';
type SecondsPerTimeUnit = {
  unit: TimeUnits;
  seconds: number;
};

export const getRelativeTime = (time: string) => {
  const formatter = new Intl.RelativeTimeFormat('ko', {
    numeric: 'always',
  });

  const secondsDifference =
    (new Date().getTime() - new Date(time).getTime()) / 1000;

  const SECONDS_PER_TIME_UNIT: SecondsPerTimeUnit[] = [
    { unit: 'year', seconds: 60 * 60 * 24 * 365 },
    { unit: 'month', seconds: 60 * 60 * 24 * 30 },
    { unit: 'day', seconds: 60 * 60 * 24 },
    { unit: 'hour', seconds: 60 * 60 },
    { unit: 'minute', seconds: 60 },
  ];

  for (const { unit, seconds } of SECONDS_PER_TIME_UNIT) {
    const calculatedTime = Math.floor(secondsDifference / seconds);

    if (calculatedTime > 0) {
      return formatter.format(calculatedTime * -1, unit);
    }
  }

  return '방금 전';
};

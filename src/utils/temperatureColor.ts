interface TemperatureColor {
  text: string;
  background: string;
}

export const getColorByTemperature = (value: number): TemperatureColor => {
  if (value < 12.5)
    return { text: 'text-manner-accent7', background: 'bg-manner-accent7' };
  if (value <= 30)
    return { text: 'text-manner-accent6', background: 'bg-manner-accent6' };
  if (value <= 36.5)
    return { text: 'text-manner-accent5', background: 'bg-manner-accent5' };
  if (value <= 50.5)
    return { text: 'text-manner-accent4', background: 'bg-manner-accent4' };
  if (value <= 65.5)
    return { text: 'text-manner-accent3', background: 'bg-manner-accent3' };
  if (value <= 88)
    return { text: 'text-manner-accent2', background: 'bg-manner-accent2' };
  return { text: 'text-manner-accent1', background: 'bg-manner-accent1' };
};

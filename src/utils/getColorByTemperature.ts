interface TemperatureColor {
  text: string;
  background: string;
}

const getColorByTemperature = (temperature: number): TemperatureColor => {
  if (temperature < 12.5)
    return { text: 'text-manner-accent7', background: 'bg-manner-accent7' };
  if (temperature <= 30)
    return { text: 'text-manner-accent6', background: 'bg-manner-accent6' };
  if (temperature <= 36.5)
    return { text: 'text-manner-accent5', background: 'bg-manner-accent5' };
  if (temperature <= 50.5)
    return { text: 'text-manner-accent4', background: 'bg-manner-accent4' };
  if (temperature <= 65.5)
    return { text: 'text-manner-accent3', background: 'bg-manner-accent3' };
  if (temperature <= 88)
    return { text: 'text-manner-accent2', background: 'bg-manner-accent2' };
  return { text: 'text-manner-accent1', background: 'bg-manner-accent1' };
};

export default getColorByTemperature;

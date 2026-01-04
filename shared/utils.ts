// @ts-expect-error: No types for 'gsap/all'
import gsap from "gsap/all";

type ShadeSteps =
  | 0
  | 5
  | 10
  | 15
  | 20
  | 25
  | 30
  | 35
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 75
  | 80
  | 85
  | 90
  | 95;

type ColorShades = Record<ShadeSteps, string>;
type GeneratedColors<K extends string> = Record<K, ColorShades>;
const isQuoted = (str: string): boolean => /^['"].*['"]$/.test(str);

const generateShades = <K extends string>(
  colors: Record<K, string>
): GeneratedColors<K> => {
  const result = {} as GeneratedColors<K>;

  for (const [key, value] of Object.entries(colors) as [K, string][]) {
    const shades = {} as ColorShades;

    for (let i = 0; i <= 19; i++) {
      const split = gsap.utils.splitColor(value);
      const rgb = split.toString().replaceAll(",", " ");
      const alpha = Math.round((((i / 20) * 0xff) / 255) * 100);

      shades[(i * 5) as ShadeSteps] = `rgb(${rgb} / ${alpha}%)`;
    }

    result[key] = shades;
  }

  return result;
};

export { isQuoted, generateShades };

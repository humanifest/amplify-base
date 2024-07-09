type ColorsValue = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type Color = Record<ColorsValue, string>;

export default function mapTailwindToAmplify(tailwindColors: Color) {
  const amplifyColors = {
    "10": tailwindColors[50],
    "20": tailwindColors[100],
    "40": tailwindColors[200],
    "60": tailwindColors[400],
    "80": tailwindColors[600],
    "90": tailwindColors[800],
    "100": tailwindColors[900],
  };

  return amplifyColors;
}

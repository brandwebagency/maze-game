interface Prize {
  text: string;
  color: string;
  textColor: string;
  giftText?: string;
}

interface UseWheelOfFortuneProps {
  prizes: Prize[];
  spinDuration?: number;
  minSpins?: number;
  maxSpins?: number;
  enableKeyboardSpin?: boolean;
}

interface UseWheelOfFortuneReturn {
  isSpinning: boolean;
  result: string;
  wheelRef: React.RefObject<SVGSVGElement>;
  spinWheel: () => void;
  resetWheel: () => void;
}

export type { Prize, UseWheelOfFortuneProps, UseWheelOfFortuneReturn };

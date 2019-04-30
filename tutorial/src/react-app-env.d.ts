/// <reference types="react-scripts" />

interface SquareProps {
  value: any;
  onClick: () => void;
}

type SquareTypea = 'O' | 'X' | null;

interface BoardProps {
  squares: SquareType[];
  onClick: (i: number) => void;
}

interface HistoryData {
  squares: SquareType[];
}
interface GameState {
  history: HistoryData[];
  xIsNext: boolean;
  stepNumber: number;
}
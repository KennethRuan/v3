import { Position } from "../types";

export const BOX_SIZE = 5;
export const generatePositions = (n: number): any[] => {
  const positions: { position: Position; angle: number }[] = [
    // BOTTOM RIGHT STACK
    {
      position: [-16.5, 0.7 * BOX_SIZE, 10],
      angle: 195,
    },
    {
      position: [-15, 1.7 * BOX_SIZE, 7],
      angle: 2,
    },
    {
      position: [-15, 0.7 * BOX_SIZE, 4],
      angle: -25,
    },
    // MIDDLE LEFT STACK
    {
      position: [-17, 0.7 * BOX_SIZE, -2],
      angle: -5,
    },
    {
      position: [-19, 1.7 * BOX_SIZE, 1],
      angle: 210,
    },
    {
      position: [-22, 0.7 * BOX_SIZE, 5],
      angle: 170,
    },
    // TOP LEFT STACK
    {
      position: [-14.5, 0.7 * BOX_SIZE, -8],
      angle: 30,
    },
    {
      position: [-13, 1.7 * BOX_SIZE, -12],
      angle: 0,
    },
    {
      position: [-13, 0.7 * BOX_SIZE, -14],
      angle: 0,
    },
    // TOP LEFT CORNER
    {
      position: [-20, 0.7 * BOX_SIZE, -10],
      angle: 182,
    },
    // TOP MIDDLE (LEFT) STACK
    {
      position: [-7, 0.7 * BOX_SIZE, -10],
      angle: 0,
    },
    {
      position: [-6, 1.7 * BOX_SIZE, -11],
      angle: -20,
    },
    {
      position: [-5, 0.7 * BOX_SIZE, -13],
      angle: 20,
    },
    // TOP MIDDLE (RIGHT) STACK
    {
      position: [1, 0.7 * BOX_SIZE, -8],
      angle: 20,
    },
    {
      position: [2, 1.7 * BOX_SIZE, -9],
      angle: -30,
    },
    // BOTTOM MIDDLE (LEFT) STACK
    {
      position: [-9, 0.7 * BOX_SIZE, 7],
      angle: 10,
    },
    {
      position: [-9, 1.7 * BOX_SIZE, 7],
      angle: 10,
    },
    {
      position: [-6, 2.7 * BOX_SIZE, 9],
      angle: 20,
    },
    {
      position: [-2, 0.7 * BOX_SIZE, 11],
      angle: -20,
    },
    {
      position: [-1, 1.7 * BOX_SIZE, 9],
      angle: -10,
    },
    {
      position: [-9, 0.7 * BOX_SIZE, 13],
      angle: 10,
    },
    {
      position: [-9, 1.7 * BOX_SIZE, 13],
      angle: 10,
    },
    // BOTTOM MIDDLE (RIGHT) STACK
    {
      position: [4, 0.7 * BOX_SIZE, 10],
      angle: 30,
    },
    {
      position: [9, 0.7 * BOX_SIZE, 13],
      angle: -85,
    },
    {
      position: [8, 1.7 * BOX_SIZE, 8],
      angle: -35,
    },
    // BOTTOM RIGHT STACK
    {
      position: [8, 0.7 * BOX_SIZE, 6],
      angle: -45,
    },
    {
      position: [13.5, 0.7 * BOX_SIZE, 8],
      angle: 30,
    },
    {
      position: [19.5, 0.7 * BOX_SIZE, 9],
      angle: 210,
    },
    {
      position: [15, 0.7 * BOX_SIZE, 13.5],
      angle: 0,
    },
    {
      position: [14, 1.7 * BOX_SIZE, 10],
      angle: 300,
    },
    // MIDDLE RIGHT STACK
    {
      position: [13.5, 0.7 * BOX_SIZE, 0.5],
      angle: 170,
    },
    {
      position: [16, 1.8 * BOX_SIZE, 4],
      angle: 0,
    },
    {
      position: [19, 0.7 * BOX_SIZE, 3],
      angle: 0,
    },
    // TOP RIGHT STACK
    {
      position: [19, 0.7 * BOX_SIZE, -2.5],
      angle: 190,
    },
    {
      position: [21, 1.7 * BOX_SIZE, -5],
      angle: 0,
    },
    {
      position: [21, 0.7 * BOX_SIZE, -8],
      angle: 5,
    },
    // TOP RIGHT (BUT NOT SO RIGHT) STACK
    {
      position: [12, 0.7 * BOX_SIZE, -3],
      angle: 0,
    },
    {
      position: [10, 1.7 * BOX_SIZE, -7],
      angle: 70,
    },
    {
      position: [7.5, 0.7 * BOX_SIZE, -8],
      angle: -30,
    },
    {
      position: [15, 0.7 * BOX_SIZE, -9],
      angle: 20,
    },
    {
      position: [14.5, 1.7 * BOX_SIZE, -2.5],
      angle: 250,
    },
    {
      position: [15.5, 1.7 * BOX_SIZE, -8.5],
      angle: 180,
    },
    // MIDDLE BOX
    {
      position: [2, 0.7 * BOX_SIZE, 1],
      angle: -5,
    },
  ];
  return positions;
};

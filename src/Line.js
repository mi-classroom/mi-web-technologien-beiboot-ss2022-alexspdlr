import * as THREE from 'three';
import { useRef, useState, useLayoutEffect } from 'react';
import { Box, Tube } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import colors from './assets/styles/scss/abstracts/variables.scss';

function CustomLine({ start, end }) {
  const linewidth = 0.0075;
  const color = colors.dark;

  function calcLength(start, end) {
    return end - start;
  }

  function calcDimensions() {
    if (start[0] > end[0]) {
      const length = calcLength(start[0], end[0]);
      return {
        size: [length, linewidth, linewidth],
        position: [start[0] + length / 2, start[1], start[2]],
      };
    }

    if (start[0] < end[0]) {
      const length = calcLength(start[0], end[0]);

      return {
        size: [length, linewidth, linewidth],
        position: [start[0] - length / 2, start[1], start[2]],
      };
    }

    if (start[1] > end[1]) {
      const length = calcLength(start[1], end[1]);
      return {
        size: [linewidth, length, linewidth],
        position: [start[0], start[1] + length / 2, start[2]],
      };
    }

    if (start[1] < end[1]) {
      const length = calcLength(start[1], end[1]);
      return {
        size: [linewidth, length, linewidth],
        position: [start[0], start[1] - length / 2, start[2]],
      };
    }

    if (start[2] > end[2]) {
      const length = calcLength(start[2], end[2]);
      return {
        size: [linewidth, linewidth, length],
        position: [start[0], start[1], start[2] + length / 2],
      };
    }

    if (start[2] < end[2]) {
      const length = calcLength(start[2], end[2]);
      return {
        size: [linewidth, linewidth, length],
        position: [start[0], start[1], start[2] - length / 2],
      };
    }

    return {
      size: [linewidth, linewidth, linewidth],
      position: [start[0], start[1], start[2]],
    };
  }

  const dimensions = calcDimensions();
  const { size, position } = dimensions;

  const adjustedPosition =
    position[1] === 0
      ? [position[0], position[1] + linewidth / 1.9, position[2]]
      : position;

  return (
    <Box position={adjustedPosition} args={size}>
      <meshBasicMaterial color={color} />
    </Box>
  );
}

export default CustomLine;

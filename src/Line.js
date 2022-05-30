import * as THREE from 'three';
import { useRef, useState, useLayoutEffect } from 'react';
import { Line } from '@react-three/drei';

const CustomLine = ({ points, color, linewidth, opacity }) => {
  return (
    <Line
      points={points}
      color={color}
      lineWidth={0.25}
      opacity={opacity || 0.2}
    />
  );
};

export default CustomLine;

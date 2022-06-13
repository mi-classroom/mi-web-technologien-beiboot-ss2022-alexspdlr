import { usePlane } from '@react-three/cannon';
import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import Line from './Line';
import colors from './assets/styles/scss/abstracts/variables.scss';

export const Ground = ({ stepSize }) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <>
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial color={colors.darker} toneMapped={false} />
      </mesh>
    </>
  );
};

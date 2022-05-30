import { usePlane } from '@react-three/cannon';
import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import Line from './Line';

export const Ground = ({ stepSize }) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <>
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial color='#ffffff' toneMapped={false} />
      </mesh>
    </>
  );
};

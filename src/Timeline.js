import { Text3D } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import React from 'react';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import IBMPlexSans from './assets/IBM Plex Sans_Regular.json';
import Line from './Line';

const Sphere = ({ x, y, z }) => {
  return (
    <mesh position={[x, y, z]}>
      <boxBufferGeometry attach='geometry' args={[4, 1, 1]} />
      <meshStandardMaterial attach='material' />
      <boxGeometry args={[0.01, 0.01, 0.01]} />
      <meshStandardMaterial color={'#000'} />
    </mesh>
  );
};

const Text = ({ x, y, z, content }) => {
  extend({ TextGeometry });
  return (
    <mesh position={[x, y, z]}>
      <Text3D font={IBMPlexSans} size={0.04} height={0.001}>
        {content}
        <meshStandardMaterial color={'#000'} />
      </Text3D>
    </mesh>
  );
};

export const Timeline = ({ startDate, endDate, stepSize }) => {
  const length = (endDate - startDate) * stepSize;
  const height = 0.95;

  return (
    <>
      <Line
        points={[
          [-1, 0, 0],
          [-1, 0, -length],
        ]}
        linewidth={0.5}
        color='#000'
      />
      {[...Array(length).keys()].map((number, index) => (
        <>
          <Line
            points={[
              [-1.025, height, -number * stepSize],
              [-1, height, -number * stepSize],
              [-1, 0, -number * stepSize],
            ]}
            linewidth={0.5}
            color='#000'
          />

          <Text
            x={-1.2}
            y={height}
            z={-number * stepSize}
            content={parseInt(startDate) + number}
          />
        </>
      ))}
    </>
  );
};

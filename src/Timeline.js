import { Text3D } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import React from 'react';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import IBMPlexSans from './assets/IBM Plex Sans_Regular.json';
import Line from './Line';

const Text = ({ x, y, z, content }) => {
  extend({ TextGeometry });
  return (
    <mesh position={[x, y, z]}>
      <Text3D font={IBMPlexSans} size={0.05} height={0.005}>
        {content}
        <meshStandardMaterial color={'#000000'} />
      </Text3D>
    </mesh>
  );
};

export const Timeline = ({ startDate, endDate, stepSize }) => {
  const length = (endDate - startDate) * stepSize;
  const height = 0.95;

  return (
    <group>
      <Line
        start={[-1, 0, 0]}
        end={[-1, 0, -length]}
        linewidth={0.5}
        color='#000000'
      />
      {[...Array(length).keys()].map((number, index) => (
        <group>
          <Line
            start={[-1, height, -number * stepSize]}
            end={[-1, 0, -number * stepSize]}
            linewidth={0.5}
            color='#000000'
          />
          <Line
            start={[-1, height, -number * stepSize]}
            end={[-1.05, height, -number * stepSize]}
            linewidth={0.5}
            color='#000000'
          />

          <Text
            x={-1.25}
            y={height - 0.025}
            z={-number * stepSize}
            content={parseInt(startDate) + number}
          />
        </group>
      ))}
    </group>
  );
};

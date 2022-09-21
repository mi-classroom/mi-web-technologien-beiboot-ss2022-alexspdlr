import { Text3D } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import React from 'react';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import IBMPlexSans from '../../assets/IBM Plex Sans_Regular.json';
import colors from '../../assets/styles/scss/abstracts/variables.scss';
import indexToGroupTitle from '../../utils/indexToGroupTitle';
import Line from './Line';

const Text = ({ x, y, z, content }) => {
  extend({ TextGeometry });
  return (
    <mesh position={[x, y, z]}>
      <Text3D font={IBMPlexSans} size={0.05} height={0.005}>
        {content}
        <meshBasicMaterial color={colors.lightest} />
      </Text3D>
    </mesh>
  );
};

export const Groupline = ({ stepSize, zIndentation }) => {
  const length = 4 * stepSize;
  const height = 0.95;

  return (
    <group>
      <Line
        start={[-1, 0, -zIndentation]}
        end={[-1, 0, -zIndentation - length]}
        linewidth={0.5}
      />
      {[...Array(length / stepSize + 1).keys()].map((number, index) => (
        <group>
          <Line
            start={[-1, height, -zIndentation - number * stepSize]}
            end={[-1, 0, -zIndentation - number * stepSize]}
            linewidth={0.5}
          />
          <Line
            start={[-1, height, -zIndentation - number * stepSize]}
            end={[-1.05, height, -zIndentation - number * stepSize]}
            linewidth={0.5}
          />

          <Text
            x={-1.25 - indexToGroupTitle(index).length * 0.025}
            y={height - 0.025}
            z={-zIndentation - number * stepSize}
            content={indexToGroupTitle(index)}
          />
        </group>
      ))}
    </group>
  );
};

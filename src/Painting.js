import { Physics } from '@react-three/cannon';
import { PointerLockControls, Sky, Image } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { DoubleSide } from 'three';
import Line from './Line';
const useProxy = (text) => {
  const split = text.split('imageserver-2022/');
  return 'https://lucascranach.org/data-proxy/image.php?subpath=/' + split[1];
};

export const Painting = ({
  year,
  url,
  height,
  aspectRatio,
  indentation,
  stepSize,
}) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const depth = 0.03;
  const width = height * aspectRatio;
  const passepartoutSize = width < 0.05 ? 0.05 : width * 0.3;
  const frameSize = width < 0.05 ? 0.01 : 0.025;
  const offsetY = 0.8;
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group>
      <group position={[1, height / 2 + offsetY, -(year - 1501) * stepSize]}>
        <mesh
          position={[indentation, 0, 0]}
          ref={mesh}
          onPointerOver={(event) => console.log('hoevr in')}
          onPointerOut={(event) => console.log('hoevr out')}
        >
          <boxBufferGeometry attach='geometry' args={[4, 1, 1]} />
          <meshStandardMaterial attach='material' />
          <boxGeometry
            args={[
              width + passepartoutSize + frameSize,
              height + passepartoutSize + frameSize,
              depth,
            ]}
          />
          <meshStandardMaterial color={'#000000'} />
        </mesh>
        <mesh
          position={[indentation, 0, depth / 2 + 0.001]}
          rotation={[0, 0, 0]}
          scale={[width + passepartoutSize, height + passepartoutSize, 1]}
        >
          {/*
  The thing that gives the mesh its shape
  In this case the shape is a flat plane
*/}
          <planeBufferGeometry />
          {/*
  The material gives a mesh its texture or look.
  In this case, it is just a uniform green
*/}
          <meshBasicMaterial
            color='#f2f2f0'
            toneMapped={false}
            side={DoubleSide}
          />
        </mesh>
        <Image
          url={useProxy(url)}
          transparent
          scale={[width, height, 0]}
          position={[indentation, 0, depth / 2 + 0.003]}
        />
      </group>
      <Line
        start={[indentation + 1, offsetY, -(year - 1501) * stepSize]}
        end={[indentation + 1, 0, -(year - 1501) * stepSize]}
        linewidth={0.5}
        color='#000'
      />
    </group>
  );
};

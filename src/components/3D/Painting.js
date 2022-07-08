import { Image } from '@react-three/drei';
import { useRef } from 'react';
import { DoubleSide } from 'three';
import colors from '../../assets/styles/scss/abstracts/variables.scss';
import groupTitleToIndex from '../../utils/groupTitleToIndex';
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
  id,
  focusedPainting,
  setFocusedPainting,
  selectPainting,
  inventoryNumber,
  isItemSelected,
  groupTitle,
  zIndentation,
  isBestOf,
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
      <group
        position={
          isItemSelected
            ? [
                1,
                height / 2 + offsetY,
                -groupTitleToIndex(groupTitle) * stepSize - zIndentation,
              ]
            : [1, height / 2 + offsetY, -(year - 1501) * stepSize]
        }
      >
        <mesh
          position={[indentation, 0, 0]}
          ref={mesh}
          onPointerOver={(event) => {
            if (
              event.distance < 14 &&
              (!focusedPainting || focusedPainting?.distance > event.distance)
            ) {
              setFocusedPainting({
                id,
                distance: event.distance,
              });
            }
          }}
          onPointerOut={(event) => {
            if (focusedPainting?.id === id) {
              setFocusedPainting(null);
            }
          }}
          onClick={(event) => {
            if (event.button === 0 && isBestOf) {
              selectPainting(inventoryNumber);
            }

            if (event.button === 2) {
              window.open(
                `https://lucascranach.org/de/${inventoryNumber}/`,
                '_blank'
              );
            }
          }}
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
          <meshBasicMaterial color={colors.darkest} />
        </mesh>
        <mesh
          position={[indentation, 0, depth / 2 + 0.001]}
          rotation={[0, 0, 0]}
          scale={[width + passepartoutSize, height + passepartoutSize, 1]}
        >
          <planeBufferGeometry />
          <meshBasicMaterial
            color={colors.lightest}
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
        start={
          isItemSelected
            ? [
                indentation + 1,
                offsetY,
                -groupTitleToIndex(groupTitle) * stepSize - zIndentation,
              ]
            : [indentation + 1, offsetY, -(year - 1501) * stepSize]
        }
        end={
          isItemSelected
            ? [
                indentation + 1,
                0,
                -groupTitleToIndex(groupTitle) * stepSize - zIndentation,
              ]
            : [indentation + 1, 0, -(year - 1501) * stepSize]
        }
        linewidth={0.5}
      />
    </group>
  );
};

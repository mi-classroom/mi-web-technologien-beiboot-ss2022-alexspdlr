import { Physics } from '@react-three/cannon';
import { PointerLockControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useState } from 'react';
import colors from '../../assets/styles/scss/abstracts/variables.scss';
import { Ground } from './Ground';
import Line from './Line';
import { Painting } from './Painting';
import { Player } from './Player';
import { Timeline } from './Timeline';
import { Groupline } from './Groupline';
import imageFromPainting from '../../utils/imageFromPainting';
import groupPaintingsByYear from '../../utils/groupPaintingsByYear';
import calculatePaintingHeight from '../../utils/calculatePaintingHeight';
import groupPaintingsBySelectedPainting from '../../utils/groupPaintingsBySelectedPainting';

function World({ bestOfs, stepSize, focusedPainting, setFocusedPainting }) {
  const [groupedItems, setGroupedItems] = useState(
    Object.entries(groupPaintingsByYear(bestOfs))
  );
  const [itemSelected, setItemSelected] = useState(false);

  const selectPainting = (inventoryNumber) => {
    setItemSelected(true);
    setGroupedItems(
      Object.entries(groupPaintingsBySelectedPainting(inventoryNumber, bestOfs))
    );
  };

  useEffect(() => {
    console.log('groupedItems: ', groupedItems);
  }, [groupedItems]);

  return (
    <Canvas
      shadows
      pixelRatio={window.devicePixelRatio}
      gl={{ alpha: false, antialias: true }}
      camera={{ fov: 75 }}
      style={{
        width: '100vw',
        height: '100vh',
      }}
      onCreated={({ gl, scene }) => {
        scene.background = new THREE.Color(colors.medium);
      }}
    >
      <Physics>
        {
          <>
            {groupedItems.map(([year, group]) => (
              <>
                {group.map((painting, groupIndex) => (
                  <Painting
                    stepSize={stepSize}
                    year={year}
                    indentation={groupIndex * 2}
                    url={imageFromPainting(painting).sizes.medium.src}
                    height={calculatePaintingHeight(painting)}
                    aspectRatio={
                      imageFromPainting(painting).sizes.medium
                        ? imageFromPainting(painting).sizes.medium.dimensions
                            .width /
                          imageFromPainting(painting).sizes.medium.dimensions
                            .height
                        : 1
                    }
                    id={imageFromPainting(painting).id}
                    focusedPainting={focusedPainting}
                    setFocusedPainting={setFocusedPainting}
                    selectPainting={selectPainting}
                    inventoryNumber={painting.inventoryNumber}
                  />
                ))}
                <Line
                  start={[group.length * 2 - 1, 0, -(year - 1501) * stepSize]}
                  end={[-1, 0, -(year - 1501) * stepSize]}
                  linewidth={0.5}
                />
              </>
            ))}
          </>
        }

        {itemSelected ? (
          <Groupline stepSize={stepSize} />
        ) : (
          <Timeline
            startDate={bestOfs[0].sortingInfo.year}
            endDate={bestOfs[bestOfs.length - 1].sortingInfo.year}
            stepSize={stepSize}
          />
        )}

        <Ground />
        <Player />
      </Physics>
      <PointerLockControls />
    </Canvas>
  );
}

export default World;

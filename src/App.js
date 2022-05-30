import { Physics } from '@react-three/cannon';
import { PointerLockControls, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import './App.scss';
import './assets/styles/scss/abstracts/variables.scss';

import * as THREE from 'three';

const groupByYear = (items) =>
  items.reduce((groups, item) => {
    const group = groups[item.sortingInfo.year] || [];
    group.push(item);
    groups[item.sortingInfo.year] = group;
    return groups;
  }, {});

const calculateHeight = (item) => {
  const split = item.dimensions.replace(/[\])}[{(]/g, ' ').split(' ');
  const scalingFactor = 1 / 1.8;
  const splitWithoutCM = split.filter(
    (string) => string !== 'cm' && string !== ''
  );

  let size;
  let sideMeasured;

  for (const string of splitWithoutCM) {
    const stringSlicedAtDash = string.split('-')[0];

    if (!size) {
      if (/\d/.test(stringSlicedAtDash)) {
        size = parseFloat(stringSlicedAtDash.replace(/,/g, '.'));
      }
    } else {
      sideMeasured = stringSlicedAtDash;

      break;
    }
  }

  switch (sideMeasured) {
    case 'oben':
      size =
        (size / item.images.overall.images[0].sizes.medium.dimensions.width) *
        item.images.overall.images[0].sizes.medium.dimensions.height;

      break;
    case 'Durchmesser':
      const scaledDiameter = Math.sqrt(
        Math.pow(
          item.images.overall.images[0].sizes.medium.dimensions.width,
          2
        ) +
          Math.pow(
            item.images.overall.images[0].sizes.medium.dimensions.height,
            2
          )
      );

      const scalingFactor = size / scaledDiameter;

      size =
        item.images.overall.images[0].sizes.medium.dimensions.height *
        scalingFactor;

      break;
    default:
      break;
  }

  return (size / 100) * scalingFactor;
};

function App() {
  const [bestOfs, setBestOfs] = useState(null);
  const [loading, setLoading] = useState(false);
  const stepSize = 4;

  const onFileChange = (event) => {
    setLoading(true);

    var files = event.target.files;

    if (files.length <= 0) {
      return false;
    }

    files[0].text().then(function (text) {
      var result = JSON.parse(text);
      const filteredItems = result.items.filter(
        (item) => item.isBestOf === true
      );
      const filteredItemsSorted = filteredItems.sort((a, b) =>
        a.sortingNumber > b.sortingNumber
          ? 1
          : b.sortingNumber > a.sortingNumber
          ? -1
          : 0
      );
      setBestOfs(filteredItemsSorted);
      setLoading(false);
    });
  };

  const removeTextInBrackets = (text) => {
    const roundBracketsRemoved = text.split('(')[0];
    const squareBracketsRemoved = roundBracketsRemoved.split('[')[0];
    return squareBracketsRemoved;
  };

  const UI = ({ children }) => {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          zIndex: 100,
        }}
      >
        {children}
      </div>
    );
  };

  const Crosshair = () => {
    return (
      <div
        style={{
          height: '4px',
          width: '4px',
          backgroundColor: 'white',
          borderRadius: '50%',
          border: '0.5px solid black',
          margin: 'auto',
        }}
      />
    );
  };

  return (
    <div className='App'>
      <div className='App-body'>
        {bestOfs ? (
          <>
            <UI>
              <Crosshair />
            </UI>
            <Canvas
              shadows
              pixelRatio={window.devicePixelRatio}
              gl={{ alpha: false }}
              camera={{ fov: 75 }}
              style={{
                width: '100vw',
                height: '100vh',
              }}
              onCreated={({ gl, scene }) => {
                scene.background = new THREE.Color('#ffffff');
              }}
            >
              <PointerLockControls />
            </Canvas>
          </>
        ) : (
          <>
            {loading ? (
              <p className='h1'>Bitte warten ...</p>
            ) : (
              <>
                <p className='h1'>Lade die benötigte JSON Datei hoch.</p>

                {bestOfs ? (
                  <div>{JSON.stringify(bestOfs).slice(0, 10)}</div>
                ) : (
                  <div>
                    <label class='uploadButton'>
                      <input
                        type='file'
                        onChange={onFileChange}
                        accept='application/JSON'
                      />
                      Datei auswählen
                    </label>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;

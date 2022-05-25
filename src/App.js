import './App.scss';
import './assets/styles/scss/abstracts/variables.scss';
import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

function App() {
  const [bestOfs, setBestOfs] = useState(null);
  const [loading, setLoading] = useState(false);

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
      console.log(filteredItemsSorted);
      setLoading(false);
    });
  };

  const removeTextInBrackets = (text) => {
    const roundBracketsRemoved = text.split('(')[0];
    const squareBracketsRemoved = roundBracketsRemoved.split('[')[0];
    return squareBracketsRemoved;
  };

  return (
    <div className='App'>
      <div className='App-body'>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
        {/*bestOfs ? (
          <div className='listContainer'>
            {bestOfs.map((item) => (
              <div className='gridItem' key={item.metadata.id}>
                <div className='tile'>
                  <div className='previewContainer'>
                    <img
                      className='previewImage'
                      src={item.images.overall.images[0].sizes.medium.src}
                      alt={item.metadata.title}
                    />
                  </div>
                  <div className='h1'>
                    {item.metadata.title}, {item.metadata.date}
                  </div>
                  <div className='h2'>{removeTextInBrackets(item.medium)}</div>
                  <div className='h2'>{item.repository}</div>
                </div>
              </div>
            ))}
          </div>
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
        )*/}
      </div>
    </div>
  );
}

export default App;

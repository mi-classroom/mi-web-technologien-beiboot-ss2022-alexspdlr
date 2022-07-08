import { useState } from 'react';
import './App.scss';
import './assets/styles/scss/abstracts/variables.scss';
import PaintingInfoOverlay from './components/2D/PaintingInfoOverlay';
import UI from './components/2D/UI';
import UploadJSON from './components/2D/UploadJSON';
import imageFromPainting from './utils/imageFromPainting';
import removeTextInBrackets from './utils/removeTextInBrackets';
import World from './components/3D/World';

function App() {
  const [bestOfs, setBestOfs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [focusedPainting, setFocusedPainting] = useState(null);
  const stepSize = 4;

  /**
   *
   * @returns Object containing all Infomation displayed in the Info Overlay
   */
  const paintingInfo = () => {
    const painting = bestOfs.find(
      (painting) => imageFromPainting(painting).id === focusedPainting.id
    );

    return {
      title: painting.metadata.title,
      date: painting.sortingInfo.year,
      artist: painting.involvedPersons[0].name,
      medium: removeTextInBrackets(painting.medium),
      owner: painting.repository,
    };
  };

  /**
   * filters the input json by "isBestOf" & sets the bestOf state variable
   * @param {*} event
   */
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

  return (
    <div className='App'>
      <div className='App-body'>
        {bestOfs ? (
          <>
            <UI />
            {focusedPainting && (
              <PaintingInfoOverlay
                title={paintingInfo().title}
                artist={paintingInfo().artist}
                medium={paintingInfo().medium}
                owner={paintingInfo().owner}
              />
            )}
            <World
              bestOfs={bestOfs}
              stepSize={stepSize}
              focusedPainting={focusedPainting}
              setFocusedPainting={setFocusedPainting}
            />
          </>
        ) : (
          <UploadJSON loading={loading} onFileChange={onFileChange} />
        )}
      </div>
    </div>
  );
}

export default App;

import { useEffect } from 'react';

const PaintingInfoOverlay = ({ title, artist, medium, owner, isBestOf }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'm') {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1; // From 0 to 1
        msg.pitch = 1;
        msg.text = `Titel: ${title}, Künstler: ${artist}, Besitzer: ${owner}`;
        msg.lang = 'de-DE';
        speechSynthesis.speak(msg);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='overlay'>
      <div className='h1'>{title} </div>
      <div className='h2'>
        {artist}
        <br />
        {medium}
        <br />
        {owner}
        <br />
        {!isBestOf && (
          <>
            <br />
            <b>ACHTUNG:</b>
            <br />
            Dieses Gemälde ist <b>kein</b> Best-Of!
            <br />
            Du kannst detaillierte Informationen im Archiv einsehen, <br />{' '}
            indem du das Bild rechtsklickst.
          </>
        )}
      </div>
    </div>
  );
};

export default PaintingInfoOverlay;

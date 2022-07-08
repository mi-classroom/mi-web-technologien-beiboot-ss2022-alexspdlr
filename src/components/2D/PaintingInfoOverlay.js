const PaintingInfoOverlay = ({ title, artist, medium, owner, isBestOf }) => {
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

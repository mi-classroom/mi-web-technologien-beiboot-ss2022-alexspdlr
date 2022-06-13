const PaintingInfoOverlay = ({ title, artist, medium, owner }) => {
  return (
    <div className='overlay'>
      <div className='h1'>{title} </div>
      <div className='h2'>
        {artist}
        <br />
        {medium}
        <br />
        {owner}
      </div>
    </div>
  );
};

export default PaintingInfoOverlay;

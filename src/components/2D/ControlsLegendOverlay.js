const ControlsLegendOverlay = () => {
  return (
    <div className='overlay-legend'>
      <div className='h2'>
        Charakter bewegen: <br />
        <b>
          <em> W, A, S, D</em>{' '}
        </b>
        <br />
        <br />
        Kamera bewegen: <br />
        <b>
          <em> Maus</em>
        </b>
        <br />
        <br />
        Bezüge zum Gemälde ansehen: <br />
        <b>
          <em> Linksklick</em>{' '}
        </b>
        <br />
        <br />
        Gemäldedetails im Archiv ansehen: <br />
        <b>
          <em> Rechtsklick</em>{' '}
        </b>
        <br />
        <br />
        Zurück zur Jahresübersicht: <br />
        <b>
          <em> Backspace</em>
        </b>
        <br />
        <br />
        Bildinformationen vorlesen: <br />
        <b>
          <em>M</em>
        </b>
      </div>
    </div>
  );
};

export default ControlsLegendOverlay;

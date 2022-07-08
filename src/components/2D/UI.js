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

const UI = () => {
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
      <Crosshair />
    </div>
  );
};

export default UI;

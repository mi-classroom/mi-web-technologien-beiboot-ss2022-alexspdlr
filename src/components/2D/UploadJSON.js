const UploadJSON = ({ loading, onFileChange }) => {
  return (
    <>
      {loading ? (
        <p className='h1'>Bitte warten ...</p>
      ) : (
        <>
          <p className='h1'>Lade die benötigte JSON Datei hoch.</p>

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
        </>
      )}
    </>
  );
};

export default UploadJSON;

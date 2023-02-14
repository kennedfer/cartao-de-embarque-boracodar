export const RowFlightInfo = () => {
  return (
    <div className="ds-flex">
      <div className="fg-1 ds-grid pi-center f-collum ">
        <div className="ds-flex f-collum g-10">
          <div className="g-3 ds-flex f-collum">
            Embarque
            <div className="ta-center t-bold hour p-5">16:15</div>
          </div>
          <div className="g-3 ds-flex f-collum">
            Terminal
            <div className="t-bold c-black">2</div>
          </div>
          <div className="g-3 ds-flex f-collum">
            Portão
            <div className="t-bold c-black">15</div>
          </div>
        </div>
      </div>

      <div className="fg-1 ds-flex f-collum al-right">
        <div className="ds-flex mw-80 f-collum al-right ta-center">
          <img
            className="qrcode"
            src="https://play-lh.googleusercontent.com/ufwUy4SGVTqCs8fcp6Ajxfpae0bNImN1Rq2cXUjWI7jlmNMCsXgQE5C3yUEzBu5Gadkz"
            alt=""
          />

          <div className="ta-center w-100">Grupo de embarque: 3</div>
        </div>
      </div>
    </div>
  );
};

import "./styles/styles.css";
import "./components/styles/components.css";
import "./index.css";

import { RowDate } from "./components/RowDate";
import { RowFromTo } from "./components/RowFromTo";
import { RowSeat } from "./components/RowSeat";
import { RowFlightInfo } from "./components/RowFlightInfo";
import { RowWarning } from "./components/RowWarning";
import { Dot } from "./components/Dot";

function App() {
  return (
    <div className="app">
      <div className="ds-flex f-collum g-20">
        <div className="t-bold c-white ta-center ts-large-2x">
          Cartão de embarque
        </div>
        <div className="card">
          <div className="p-relative p-30 ds-flex g-20 f-collum">
            <RowDate />
            <RowFromTo />
            <Dot direction="left" />
            <Dot direction="right" />
          </div>
          <div className="p-relative p-30 dotted-border">
            <RowSeat />
            <Dot direction="left" />
            <Dot direction="right" />
          </div>
          <div className="p-30 ds-flex g-20 f-collum">
            <RowFlightInfo />
            <RowWarning />
          </div>
        </div>
        <div className="ta-center c-white ts-large">
          Qualquer problema procure o balcão de <br />
          atendimento da sua companhia aérea
        </div>
      </div>
    </div>
  );
}

export default App;

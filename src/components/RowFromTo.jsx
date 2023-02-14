export const RowFromTo = () => {
  return (
    <div className="ds-flex p-relative">
      <div className="fg-1">
        <div>São Paulo, Brasil</div>
        <div className="t-bold c-black ts-larger">GRU</div>
        <div className="c-black ts-large">17:00</div>
      </div>

      <div className="fg-1 ta-rigth">
        <div>São Francisco, EUA</div>
        <div className="t-bold c-black ts-larger">SFO</div>
        <div className="c-black ds-flex ta-right">
          <div className="ts-large fg-1">04:48</div>
          <div className="text-decoration">+1</div>
        </div>
      </div>

      <div className="fa-solid fa-plane plane c-black"></div>
    </div>
  );
};

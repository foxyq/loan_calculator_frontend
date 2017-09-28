import React from 'react';
import t from 'prop-types';

const LoanForm = ({
  price,
  months,
  insurance,
  result,
  onPriceChange,
  onMonthsChange,
  onInsuranceChange,
}) => (
  <div className="form-part inner-padding pull-left">
    <form>
      <div className="wrap-row">
        <h2>Expres půjčku schválíme online do 5 minut</h2>
        <h3>Kolik si chci půjčit</h3>
        <div className="wrap-range pull-left ">
          <div>
            <input
              type="range"
              min="20000"
              max="800000"
              step="10000"
              value={price}
              onChange={onPriceChange}
            />
          </div>
          <div className="input-help pull-left">20 000 Kč</div>
          <div className="input-help pull-right">800 000 Kč</div>
        </div>
        <div className="wrap-input pull-left">
          <input
            type="number"
            min="20000"
            max="800000"
            className="input-price"
            onChange={onPriceChange}
            value={price}
          />{' '}
          Kč
        </div>
      </div>

      <div className="wrap-row">
        <h3>Na jak dlouho</h3>
        <div className="wrap-range pull-left">
          <input type="range" min="24" max="96" step="6" value={months} onChange={onMonthsChange} />
          <div className="input-help pull-left">24 měsíců</div>
          <div className="input-help pull-right">96 měsíců</div>
        </div>
        <div className="wrap-input pull-left">
          <input
            type="number"
            className="input-months"
            onChange={onMonthsChange}
            value={months}
          />{' '}
          Měsíců
          <div className="input-help">
            {months < 52 && months % 12 === 0 && <span>{months / 12} roky</span>}
            {months <= 52 && months % 12 !== 0 && <span>{months / 12} roku</span>}
            {months > 54 && <span>{months / 12} let</span>}
          </div>
        </div>
      </div>

      <div className="wrap-row">
        <h3>Pojištení proti neschopnosti půjčku splácet</h3>
        <label htmlFor="with-insurance">
          <input
            type="radio"
            name="insurance"
            id="with-insurance"
            onChange={onInsuranceChange}
            checked={insurance}
            value={insurance}
          />
          S pojištěním
        </label>

        <label htmlFor="without-insurance">
          <input
            type="radio"
            name="insurance"
            id="without-insurance"
            onChange={onInsuranceChange}
            checked={!insurance}
            value={!insurance}
          />
          Bez pojištění
        </label>
      </div>

      <div className="wrap-row">
        <p>
          Úroková sazba od <strong>6,90 %</strong>, RPSN od <strong>7,11 %</strong>, pojištění{' '}
          <strong>0 Kč/měsíčně</strong>, poplatek za sjednání online <strong>0 Kč</strong>, celkem
          zaplatíte <strong>{Math.round(result)} Kč</strong>
        </p>
      </div>
    </form>
  </div>
);

LoanForm.propTypes = {
  price: t.number.isRequired,
  months: t.number.isRequired,
  insurance: t.bool.isRequired,
  result: t.number.isRequired,
  onPriceChange: t.func.isRequired,
  onMonthsChange: t.func.isRequired,
  onInsuranceChange: t.func.isRequired,
};

export default LoanForm;

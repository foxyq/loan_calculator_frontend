import React from 'react';
import t from 'prop-types';

const Results = ({ result, months, getApiResult }) => (
  <div className="result-part inner-padding pull-left text-center">
    <h2>Měsíčně zaplatíte</h2>
    <h1> {Math.round(result / months)} Kč</h1>

    <button onClick={getApiResult}> Pokračovat </button>
  </div>
);

Results.propTypes = {
  result: t.number.isRequired,
  months: t.number.isRequired,
  getApiResult: t.func.isRequired,
};

export default Results;

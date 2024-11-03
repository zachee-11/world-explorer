import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryCard = ({ country, onClick }) => {
  return (
    <div className="card border-secondary" onClick={onClick} style={{ cursor: 'pointer', width: '250px', margin: '5px', backgroundColor: '#6c757d' }}>
      <img src={country.flags.png} className="card-img-top" alt={`Flag of ${country.name.common}`} style={{ height: '150px', objectFit: 'cover' }} />
      <div className="card-body text-white">
        <h5 className="card-title">{country.name.common}</h5>
        <p className="card-text">Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
        <p className="card-text">Currency: {country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
      </div>
    </div>
  );
};

export default CountryCard;

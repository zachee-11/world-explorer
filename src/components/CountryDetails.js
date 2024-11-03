import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryDetails = ({ country, onClose }) => {
  return (
    <div className="modal show" style={{ display: 'block', position: 'fixed', zIndex: 1050, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={{ backgroundColor: '#6c757d', color: 'white' }}>
          <div className="modal-header">
            <h5 className="modal-title">{country.name.common}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="img-fluid mb-3" />
            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {country.area} km²</p>
            <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
            <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
            <p><strong>Google Maps:</strong> <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}>View Map</a></p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountryCard from './components/CountryCard';
import CountryDetails from './components/CountryDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,continents,flags')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  // Filtrer les pays par continent et par nom
  const filteredCountries = countries.filter(country => {
    const continent = country.continents ? country.continents[0] : '';
    
    return (
      (selectedContinent === 'All' ||
       (selectedContinent === 'Americas' && (continent === 'North America' || continent === 'South America')) ||
       continent === selectedContinent) &&
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "bg-dark text-white" : "bg-light text-dark"} style={{ minHeight: '100vh', paddingTop: '56px', display: 'flex', flexDirection: 'column' }}>
      <Navbar setSelectedContinent={setSelectedContinent} setSearchTerm={setSearchTerm} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      
      <div className="container flex-grow-1">
        <div className="row">
          {filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common)).map(country => (
            <div className="col-6 col-sm-4 col-md-3" key={country.cca3}>
              <CountryCard country={country} onClick={() => setSelectedCountry(country)} />
            </div>
          ))}
        </div>
      </div>
      
      {selectedCountry && (
        <div className="country-details mt-4">
          <CountryDetails country={selectedCountry} onClose={() => setSelectedCountry(null)} />
        </div>
      )}
      
      {/* Footer */}
      <footer className="text-center py-3 mt-4" style={{ backgroundColor: isDarkMode ? '#333' : '#f8f9fa' }}>
        <span className={isDarkMode ? "text-light" : "text-dark"}>
          &copy; {new Date().getFullYear()} - Made by Zachee
        </span>
      </footer>
    </div>
  );
}

export default App;

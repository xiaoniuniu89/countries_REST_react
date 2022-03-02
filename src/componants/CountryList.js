import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import './CountryList.css'

export default function CountryList({countries}) {
  return (
    <div className='countries-wrapper'>
        {countries && countries.map((country) => (
            <Link to={`/country/${country.name.common}`}>
              <div className='card border-box-shadow' key={uuidv4()}>
                  <img className='flag' src={country.flags.svg} alt={country.name.common}flag></img>
                  <div className='card-info'>
                      <h2 className='title'>{country.name.common}</h2>
                      <p><span className='bold'>Population:</span> {country.population.toLocaleString()}</p>
                      <p><span className='bold'>Region:</span> {country.region}</p>
                      {country.capital && <p><span className='bold'>Capital:</span> {country.capital}</p>}
                  </div>
              </div>
            </Link>
        ))}
    </div>
  )
}


// <Link to={`/country/${country.name}`}>{country.name}</Link>
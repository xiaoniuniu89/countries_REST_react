import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import BorderLink from "../../componants/BorderLink"
import { useFetch } from "../../hooks/useFetch"
import './Country.css'


export default function Country() {
  const { name } = useParams()
  const url = 'https://restcountries.com/v3.1/name/' + name + '?fullText=true' 
  const { data, isPending, error } = useFetch(url)
  

  const fetchLanguage = (languages) => {
    if (!languages) return;
    return Object.values(languages).join(', ');
  };

  const fetchNativeName = (names) => {
    return Object.values(names).slice(-1)[0].common
  }

  const FetchBorderUrl = (code) => {
    const url2 = 'https://restcountries.com/v3.1/alpha/' + code
    const { data, isPending, error } = useFetch(url2)
  }


  return (
    <div className="outer-wrapper">
      {isPending && <h1 className="loading">Loading...</h1>}
      {error && <h1 className="error">{error}</h1>}
      <Link to='/' className="back-btn">back</Link>
      {data && data.map(country => (
        
        <div key={country.name.common} className="inner-wrapper">
          <div className="flag">
            <img className='flag' src={country.flags.svg} alt={country.name.common}></img>
          </div>
          <div className="info-wrapper">
              <div>
                <div className="stats-one">
                  <h2 className='title'>{country.name.common}</h2>
                  <p><span className='bold'>Native Name:</span> {fetchNativeName(Object.values(country.name.nativeName))}</p>
                  <p><span className='bold'>Population:</span> {country.population.toLocaleString()}</p>
                  <p><span className='bold'>Region:</span> {country.region}</p>
                  <p><span className='bold'>Sub Region:</span> {country.subregion}</p>
                  <p><span className='bold'>Capital:</span> {country.capital}</p>
                </div>
                <div className="stats-two">
                  <p><span className='bold'>Top Level Domain:</span> {country.tld}</p>
                  <p><span className='bold'>Currency:</span> {Object.values(country.currencies)[0].name} {Object.values(country.currencies)[0].symbol} </p>
                  <p><span className='bold'>Languages:</span> {fetchLanguage(country.languages)}</p>
                </div> 
              </div>
            <div className="border-countries">
              {country.borders && country.borders.map(crt => (
                <BorderLink code={crt} />
              ))}
              
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

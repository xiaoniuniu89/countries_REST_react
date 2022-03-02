import { useParams, Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import './Country.css'


export default function Country() {
  const { name } = useParams()
  const url = 'https://restcountries.com/v3.1/name/' + name + '?fullText=true' 
  const { data, isPending, error } = useFetch(url)


  return (
    <div className="outer-wrapper">
      {isPending && <h1 className="loading">Loading...</h1>}
      {error && <h1 className="error">{error}</h1>}
      <Link to='/' >back</Link>
      {data && data.map(country => (
        
        <div className="inner-wrapper">
          <div className="flag">
            <img className='flag' src={country.flags.svg} alt={country.name.common}></img>
          </div>
          <div className="info-wrapper">
            <h1 className="title">{country.name.common}</h1>
            <div>
              <div className="stats-one"></div>
              <div className="stats-two"></div>
            </div>
            <div className="border-countries"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

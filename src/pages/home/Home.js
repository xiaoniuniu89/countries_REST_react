import {  useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import CountryList  from '../../componants/CountryList'
import './Home.css'

export default function Home() {

    const [url, setUrl] = useState('https://restcountries.com/v3.1/all')
    const { data, isPending, error } = useFetch(url)

    const handleSearch = (term) => {
        if(term !== ''){
            setUrl(`https://restcountries.com/v3.1/name/${term}`)
        }else {
            setUrl(('https://restcountries.com/v3.1/all'))
        }
    }

    const handlefilter = (region) => {
        if(region === 'all'){
            setUrl(('https://restcountries.com/v3.1/all'))
        } else{
            setUrl(`https://restcountries.com/v3.1/region/${region}`)
        }
       
    }


  return (
    <div>
        <div class="search-order-wrapper">
            <div className="searchbar">
                <input id="search" placeholder="Search for a country..." type="text" onChange={e => handleSearch(e.target.value)} required />
             </div>
            <div>
                <label htmlFor="region"></label>
                <select name="region" id="region" onChange={e => handlefilter(e.target.value)}>
                    <option value="all">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </div>
        {isPending && <h1 className="loading">Loading...</h1>}
        {error && <h1 className="error">{error}</h1>}
        {!error && data && <CountryList countries={data} />}
    </div>
  )
}

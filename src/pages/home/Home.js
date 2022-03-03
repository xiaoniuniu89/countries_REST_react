import {  useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import CountryList  from '../../componants/CountryList'
import './Home.css'
import search from '../../assets/search.svg'

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
        <div className="search-order-wrapper">
            <div className="search-wrapper" >
                <input className="searchbar " id="search" placeholder="Search for a country..." type="text" onChange={e => handleSearch(e.target.value)} required />
             </div>
            <div className="select-wrapper">
                <label htmlFor="region"></label>
                <select className="select-region " name="region" id="region" onChange={e => handlefilter(e.target.value)}>
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

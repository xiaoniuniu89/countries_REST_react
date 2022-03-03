import React from 'react'
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function BorderLink({ code }) {

 
const url = 'https://restcountries.com/v3.1/alpha/' + code
const { data, isPending, error } = useFetch(url)
      

  return (
      <div>
        {isPending && <h1 className="loading">Loading...</h1>}
        {error && <h1 className="error">{error}</h1>}
        {data && data.map(country => (
            <Link key={uuidv4()} to={`/country/${country.name.common}`}>
                {country.name.common}
            </Link>

        ))}
      </div>
    
  )
}

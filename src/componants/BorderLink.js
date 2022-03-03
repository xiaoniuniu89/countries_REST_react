import React from 'react'
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './BorderLink.css'
export default function BorderLink({ code }) {

 
const url = 'https://restcountries.com/v3.1/alpha/' + code
const { data, isPending, error } = useFetch(url)
      

  return (
      <div>
        {error && <h1 className="error">{error}</h1>}
        {data && data.map(country => (
            <Link key={uuidv4()} to={`/country/${country.name.common}`}>
                <p className='button border-btn'>{country.name.common}</p>
            </Link>

        ))}
      </div>
    
  )
}

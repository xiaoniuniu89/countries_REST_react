import React from 'react'
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './BorderLink.css'
import { useTheme } from '../hooks/useTheme';
export default function BorderLink({ code }) {

 
const url = 'https://restcountries.com/v3.1/alpha/' + code
const { data, isPending, error } = useFetch(url)
const { mode } = useTheme()
      

  return (
      <div>
        {error && <h1 className="error">{error}</h1>}
        {data && data.map(country => (
            <Link key={country.name.common} to={`/country/${country.name.common}`}>
                <p  className={`button border-btn ${mode}`}>{country.name.common}</p>
            </Link>

        ))}
      </div>
    
  )
}

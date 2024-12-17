import { useEffect, useState } from "react";
import Country from "../Country/Country";
import '../COuntries/countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const hundleVisitedCountries = country =>{
        console.log(country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countryContainer">

                {
                    countries.map(sCountry => <Country
                        key={sCountry.cca3}
                        country={sCountry}
                        hundleVisitedCountries={hundleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
import { useState } from "react";

const Country = ({country, hundleVisitedCountries}) => {
    const {name, flags, cca3} = country;
    const style = {
        border:"2px solid tomato",
        padding:"30px",
        margin:"15px",
        borderRadius:"5px"
    }
    const [visited, setVisited] = useState(false)

    const hundlevisited = () =>{
        setVisited(!visited)
    }

    return (
        <div style={style}>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <small>Code: {cca3}</small><br />
            <button onClick= {()=> hundleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={hundlevisited}>{visited ? "Visited" : "Visit"}</button>
        </div>
    );
};

export default Country;
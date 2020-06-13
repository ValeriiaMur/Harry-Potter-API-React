import React, {useState, useEffect} from "react"
import Character from "./Character"

const Search = ({name}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = name.filter(person =>
            person.name.includes(searchTerm)
        );
        setSearchResults(results);
        console.log(setSearchResults);
    },[searchTerm])

    return(
        <div>
             <input
                className = "search"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
                {searchResults.map(char => {
                    return <Character
                        title = {char.name}
                        img = {char.image} 
                        house = {char.house}/>
                    })
                }
        </div>

    )
}

export default Search;
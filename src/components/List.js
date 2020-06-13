import React, {useState, useEffect} from "react"
import Character from "./Character"
import Search from "./Search"

const axios = require('axios').default;

const List = () =>{
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios
            .get("http://hp-api.herokuapp.com/api/characters")
            .then(response => {
                console.log(response);
                setCharacter(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <Search name = {character}/>
            <div className = "Gallery">
            {
                character.map(char => {
                    return <Character
                        title = {char.name}
                        img = {char.image} 
                        house = {char.house}/>
                })
            }
            </div>
        </div> 
    )
}

export default List;
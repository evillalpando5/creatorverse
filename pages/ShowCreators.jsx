import {Link} from "react-router-dom";
import CreatorCard from "../components/CreatorCard.jsx";
import {useEffect, useState} from "react";
import {URL, API_KEY} from "../client.js";

function ShowCreators () {
    const [creators, setCreators] = useState([])
    useEffect(() => {
        getAllCreators()
    }, [])
    async function getAllCreators(){
        const response = await fetch(
            `${URL}/rest/v1/creators?select=*`,
            {
                method: "GET",
                headers: {
                    apikey: API_KEY,
                    Authorization: `Bearer ${API_KEY}`
                }
            }
        )
        if (!response.ok) {
            console.log("Failed to fetch data", response.status)
            return;
        }
        const data = await response.json();
        setCreators(data);

    }
    return (
        <div className={"createCard"}>
            {creators.map((creator) => (
                <CreatorCard key={creator.id} creator = {creator}/>
            ))}


        </div>
    )
}
export default ShowCreators;
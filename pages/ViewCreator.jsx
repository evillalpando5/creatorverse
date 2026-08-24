import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {URL, API_KEY} from "../client.js";
import CreatorCard from "../components/CreatorCard.jsx";
import "../css/ViewCreator.css";
function ViewCreator() {
    const {id} = useParams();
    const [creator, setCreator] = useState()
    useEffect(() => {
        getCreator()
    }, [])
    async function getCreator(){
        const response = await fetch(
            `${URL}/rest/v1/creators?id=eq.${id}`,
            {
                method: "GET",
                headers: {
                    apikey: API_KEY,
                    Authorization: `Bearer ${API_KEY}`
                }
            }
        )
        if (!response.ok){
            console.log("Failed to fetch data", response.status)
        }
        const data = await response.json()
        console.log(data)
        setCreator(data[0]);
    }
    if (!creator){
        return <p></p>
    }

return (

    <div className={"viewCreatorCard"}>
        <CreatorCard  creator = {creator}/>
        <Link to={`/`}>
            <button className={"homeBtn"}> Back to Home </button>
        </Link>
    </div>
)

}
export default ViewCreator;
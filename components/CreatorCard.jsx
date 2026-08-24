import '../css/CreatorCard.css'
// import EditCreator from "../pages/EditCreator.jsx";
// import ViewCreator from "../pages/ViewCreator.jsx";
import {Link} from "react-router-dom";
import noProfileImage from "../assets/tempProfile.jpg"
import {useState} from "react";
function CreatorCard(props) {
    const [imageError, setImageError] = useState(false);
    if (!props.creator){
        return <p> Loading Details </p>
    }
    const imageSrc = props.creator.imageURL && !imageError ? props.creator.imageURL
        : noProfileImage;
    return (
        <article className="card">
                <img className="creator"
                      src={imageSrc}
                      alt={props.creator.name}
                     onError={()=> setImageError(true)}
                />
            <header>{props.creator.name}</header>
            <a href={props.creator.url}>
                {props.creator.url}
            </a>
            <p> {props.creator.description} </p>
            <Link to={`/EditCreator/${props.creator.id}`}>
                <button id={"editBtn"}> Edit </button>
            </Link>
            <Link to={`/ViewCreator/${props.creator.id}`}>
                <button id={"viewBtn"}> View </button>
            </Link>

        </article>
    )
}
export default CreatorCard;
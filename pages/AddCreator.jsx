import {URL, API_KEY} from "../client.js";
import React from "react";
import '../css/AddCreator.css';
import {Link, useNavigate} from "react-router-dom";
function AddCreator() {
    let navigate = useNavigate()
    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        url: '',
        imageURL: ''
    })
    const [errors, setErrors] = React.useState({})
    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const validate = (e) => {
        let newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Name is required'
        }
        if (!formData.description) {
            newErrors.description = 'Description is required'
        }
        if (!formData.url) {
            newErrors.url = 'Url link is required'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmission = async (e) => {
        e.preventDefault()
        if (validate()) {
            try{
            const response = await fetch(
                `${URL}/rest/v1/creators`,
                {
                    method: "POST",
                    headers: {
                        apikey: API_KEY,
                        Authorization: `Bearer ${API_KEY}`,
                        "Content-Type": "application/json",
                        Prefer: "return=representation"
                    },
                    body: JSON.stringify(formData)
                })
                if(!response.ok){
                    console.log("Failed to add creator ", response.status)
                    return
                }
                const data = await response.json()
                console.log("Creator successfully added! ", data)
                alert("Creator has been added successfully!");
                navigate("/");

            } catch (error){
                console.log("Error fetching the data ", error)
            }
        }
            else {
                console.log("Form validation failed check entered data fields")
                console.log(errors)
            }
        }

        return (
            <div className={"classContainer"}>
                <form onSubmit={handleSubmission}>
                    <div className="creatorForm">
                        <h1>
                            ADD CREATOR TO THE CREATORVERSE!
                        </h1>
                        <p> Name</p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Enter Creators Name"
                        aria-describedby="valid-helper"/>
                        {errors.name && <small>{errors.name}</small>}
                        <p> Account Url </p>
                        <input
                            type="text"
                            name="url"
                            value={formData.url}
                            onChange={handleFormChange}
                            placeholder="Paste their youtube or other social media url here."
                            aria-describedby="valid-helper"/>
                        {errors.url && <small>{errors.url}</small>}
                        <p> ImageURL </p>
                        <input
                            type="text"
                            name="imageURL"
                            value={formData.imageURL}
                            onChange={handleFormChange}
                            placeholder="Paste imageURL of this creator."
                            aria-describedby="valid-helper"/>
                        <p> Description </p>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleFormChange}
                            maxLength={250}
                            placeholder="Tell us more about this creator. MAX 250 CHARACTERS"
                            aria-describedby="valid-helper"/>
                        <p>{formData.description.length}/250 characters</p>
                        {errors.description && <small>{errors.description}</small>}
                    <button type="submit"> Add New Creator </button>
                    </div>
                </form>
                <Link to={`/`}>
                    <button className={"homeBtn"}> Back to Home </button>
                </Link>
            </div>
        )
}
export default AddCreator;
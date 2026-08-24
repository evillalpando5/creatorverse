import {URL, API_KEY} from "../client.js";
import React, {useEffect, useState} from "react";
import '../css/AddCreator.css';
import {Link, useNavigate, useParams} from "react-router-dom";



function EditCreator() {
    let navigate = useNavigate()
    const {id} = useParams();
    console.log("id from url: ", id)
    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        url: '',
        imageURL: ''})
    const [errors, setErrors] = React.useState({})
    const [creatorInfo, setCreatorInfo ] = useState();

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
            return
        }
        const data = await response.json()
        console.log(data)
        setCreatorInfo(data);

        setFormData({
        name: data[0].name,
            description: data[0].description,
            url: data[0].url,
            imageURL: (data[0].imageURL || '')})

    }
    if (!creatorInfo){
        return <p></p>
    }

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
                    `${URL}/rest/v1/creators?id=eq.${id}`,
                    {
                        method: "PATCH",
                        headers: {
                            apikey: API_KEY,
                            Authorization: `Bearer ${API_KEY}`,
                            "Content-Type": "application/json",
                            Prefer: "return=representation"
                        },
                        body: JSON.stringify(formData)
                    })
                if(!response.ok){
                    console.log("Failed to update creator info ", response.status)
                    return
                }
                const data = await response.json()
                console.log("Creator info successfully updated! ", data)
                alert("Creator info has been updated successfully!");
                navigate("/");

            } catch (error){
                console.log("Error fetching the data ", error)
            }
        }
        else {
            console.log("Creator info updated failed, check entered data fields")
            console.log(errors)
        }
    }
    const handleDelete = async(e) => {
        e.preventDefault()
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this creator?"
        )
        if (!confirmDelete){
            return
        }
        try{
            const response = await fetch(
                `${URL}/rest/v1/creators?id=eq.${id}`,
                {
                    method: "DELETE",
                    headers: {
                        apikey: API_KEY,
                        Authorization: `Bearer ${API_KEY}`,
                        "Content-Type": "application/json",
                        Prefer: "return=representation"
                    }
                })
            if(!response.ok){
                console.log("Failed to delete creator info ", response.status)
                return
            }
            const data = await response.json()
            console.log("Creator has been deleted! ", data)
            alert("Creator has been deleted!");
            navigate("/");

        } catch (error){
            console.log("Error deleting the creator ", error)
        }
    }

    return (
        <div className={"classContainer"}>
            <form onSubmit={handleSubmission}>
                <div className="creatorForm">
                    <h1>
                        MAKE CHANGES TO CREATOR!
                    </h1>
                    <p> Name</p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        aria-describedby="valid-helper"/>
                    {errors.name && <small>{errors.name}</small>}
                    <p> Account Url </p>
                    <input
                        type="text"
                        name="url"
                        value={formData.url}
                        onChange={handleFormChange}
                        aria-describedby="valid-helper"/>
                    {errors.url && <small>{errors.url}</small>}
                    <p> ImageURL </p>
                    <input
                        type="text"
                        name="imageURL"
                        value={formData.imageURL}
                        onChange={handleFormChange}
                        aria-describedby="valid-helper"/>
                    <p> Description </p>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        aria-describedby="valid-helper"
                        maxLength={250}/>
                    <p> {formData.description.length}/250 characters</p>
                    {errors.description && <small>{errors.description}</small>}
                    <button type="submit"> Submit Changes </button>
                    <button className="deleteBtn" onClick={handleDelete}> Delete Creator </button>
                </div>
            </form>
            <Link to={`/`}>
                <button className={"homeBtn"}> Back to Home </button>
            </Link>
        </div>
    )
}
export default EditCreator;
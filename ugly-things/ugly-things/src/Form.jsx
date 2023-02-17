import React,{useContext} from "react"
import { UglyThings } from "./uglyThingsAPI"



function Form() {

    const{handleSubmit,SetFormData, formData} = useContext(UglyThings)

    function handleChange(event) {
        const {name, value} = event.target
        SetFormData(prevData => {
            return{
                ...prevData,
                [name]:value
            }
        })
    }
    return (
        <>
            <h1>Ugly Things!</h1>
            <div className="header">
                <form onSubmit={handleSubmit}>
                    <input name="title" value={formData.title} onChange={handleChange} placeholder="Title"/>
                    <input name="description" value={formData.description} onChange={handleChange} placeholder="Description"/>
                    <input name="imgUrl" value={formData.imgUrl} onChange={handleChange} placeholder="Image Url"/>
                    <button className="button">Submit</button>
                </form>
            </div>
        </>
    )



}

export default Form;
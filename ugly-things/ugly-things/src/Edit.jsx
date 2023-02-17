import React, {useState,useContext}from 'react'
import { UglyThings } from "./uglyThingsAPI"


function Edit(props){

    const {handleEdit,editForm,setEditForm} = useContext(UglyThings)

    const [toggle, setToggle] = useState(false)

    function handleChange(event){
        const {name, value} = event.target
        setEditForm(prevForm =>{
            return{
                ...prevForm,
                [name]:value
            }
        })
    }

    const changeToggle = () =>{
        setToggle(prevToggle => !prevToggle)
    }

    function submitEdit(event) {
        event.preventDefault()

        handleEdit(editForm, props._id)
    }
      
    console.log(editForm, "testing edit form")
    return (
        <div >
            {toggle ?
            <form onSubmit={submitEdit}> 
                <input
                    type= "text"
                    placeholder="Title"
                    name="title"
                    value={editForm.title}
                    onChange={handleChange}
                />
                <input 
                    type= "text"
                    placeholder="Description"
                    name="description"
                    value={editForm.description}
                    onChange={handleChange}
                />
                {/* <input 
                    type="text"
                    placeholder='Image Url'
                    name="imgUrl"
                    value={formData.imgUrl}
                    onChange={handleChange}/> */}
                <button className='edit-submit'>Submit..again</button>

                <div className="edit-text">
                    <h2 >{editForm.title}</h2>
                    <h2 >{editForm.description}</h2>
                    {/* <img src={formData.imUrl}></img> */}
                </div>
            </form>

            :
            <>
            {/* <h2>{props.topText}</h2>
                <p>{props.bottomText}</p> */}
            </>
            }
                <button onClick={changeToggle}>{editForm ? "Edit" : "Close"}</button>
        </div>
    );

}

export default Edit;
import  { createContext,useState,useEffect } from "react";
import axios from "axios"


const UglyThings = createContext(null)

 function UglyThingsContext(props){

    //This need to be in useContext and passed down to the Form Component
    const [uglyThingsArray, setUglyThingsArray] = useState([])
    
    const [formData,SetFormData] = useState({
        title:"",
        imgUrl:"",
        description:""
    })
    
    const[editForm, setEditForm] = useState({
        title:"",
        description:"",
        //imgUrl:""
    })


    useEffect(() => {
         console.log("Effect Ran")
         axios.get("https://api.vschool.io/brittanymays/thing")
         .then(res => setUglyThingsArray(res.data))
         .catch(error => console.log(error))
     },[])
    

    function getList(){
        axios.get("https://api.vschool.io/brittanymays/thing")
        .then(res => setUglyThingsArray(res.data))
        .catch(error => console.log(error))
        
    }
    
    // Submit sends the information to the API Thats why you put the POST request.
    function handleSubmit(event){
        event.preventDefault()
        console.log("Submitted to the API")
        
        const addItem = {
            title:formData.title,
            description:formData.description,
            imgUrl:formData.imgUrl
        }
            
            axios.post("https://api.vschool.io/brittanymays/thing", addItem)
            .then((res) => setUglyThingsArray(prevArray => [...prevArray, res.data]))
            .catch(error => console.log(error. response. data))
    }

    function handleDelete(id){
        axios.delete(`https://api.vschool.io/brittanymays/thing/${id}`)
        .then(() => {
                    setUglyThingsArray(uglyThingsArray.filter((item) => item._id !== id))
                })
        .catch(error => console.log(error.response.data))
    }
    

     async function handleEdit(updatedItem, id) {
    
        console.log("Item was Edited ")
        console.log(updatedItem.imgUrl, "testing updated item url")
        console.log(id, "testing id")
        console.log(formData, "testing data")
        const editItem = {
            title: updatedItem.title,
            description: updatedItem.description,
            //imgUrl: formData.imgUrl
        }

        await axios.put(`https://api.vschool.io/brittanymays/thing/${id}`, editItem)
        setUglyThingsArray(prevState => prevState.map(item => item._id === id ? editItem : item))
        getList()
    
        }

        
        return (
            <UglyThings.Provider value={{
                handleDelete,
                uglyThingsArray,
                setUglyThingsArray,
                handleEdit,
                SetFormData,
                formData,
                setEditForm,
                handleSubmit,
                editForm,
                setEditForm,
                getList
                

            }}>
                {props.children}
            </UglyThings.Provider>
        )    
}
export {UglyThings, UglyThingsContext};
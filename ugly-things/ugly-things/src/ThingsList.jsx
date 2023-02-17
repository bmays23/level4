import React, {useContext, useEffect} from "react"
import Work from "./Work"
import { UglyThings } from "./uglyThingsAPI"

function ThingsList(props){


    const {handleDelete, uglyThingsArray,  handleEdit, handleSubmit,getList} = useContext(UglyThings)

    const displayUglyThings = uglyThingsArray.map(item => {
        <div>
            
        <Work 
        item={item}
        key={item._id} 
        handleDelete={handleDelete}
        />
        </div>
        
    })
    

    return (
        <div>
            {displayUglyThings}
        </div>
        
        
    )

}

export default ThingsList;
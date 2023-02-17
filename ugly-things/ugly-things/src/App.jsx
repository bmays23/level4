import React from "react"
import Form from "./Form"
import Work from "./Work"
import ThingsList from "./ThingsList"
import { UglyThingsContext } from "./uglyThingsAPI"


export default function App(){
    return (
        <>
            <UglyThingsContext>
                <Form />
                < Work />
                <ThingsList/>
            </UglyThingsContext>
        </>
        
       
    )
}

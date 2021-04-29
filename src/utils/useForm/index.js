import { useState } from "react"

const useForm =(initialValue) =>{
    const [form, setForm]=useState(inititalValue);
    return [form, ()=>{

    }]
}
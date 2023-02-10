import React from "react"


export default function Register(){


    const[registerIn, setRegisterIn] = React.useState({
        username:"",
        mail: "",
        password: ""
    })



   function handleChange(event){
    const ident = event.target.name
        if(ident === "name"){
            setRegisterIn(p => ({...p, username: event.target.value}))
        }else if(ident ==="pass"){
            setRegisterIn(p => ({...p, password: event.target.value}))
        }else{
            setRegisterIn(p => ({...p, mail: event.target.value}))
        }
    }

    async function handleSubmit(){
            await fetch("https://immpapi.onrender.com/api/register", {
            method: "POST",
            body: JSON.stringify(registerIn)
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }


    return(
        <div className="mr-2 mt-1 flex flex-col lg:flex-row align-center border-l-2 px-1">
            <label className=" mx-1">Username: </label>
            <input onChange={(event) => handleChange(event)} value= {registerIn.username} name="name" type="text" className="text-black w-full md:w-2/3 rounded mx-1 my-1 px-3 focus:lg:absolute focus:lg:mt-12 focus:lg:w-44"/>
            <label className=" mx-1">Email: </label>
            <input onChange={(event) => handleChange(event)} value= {registerIn.mail} name="mail" type="text" className="text-black w-full md:w-2/3 rounded mx-1 my-1 px-3 focus:lg:absolute focus:lg:mt-12 focus:lg:w-44"/>
            <label className=" mx-1">Password: </label>
            <input onChange={(event) => handleChange(event)} value= {registerIn.password} name="pass" type="text" className="text-black w-full md:w-2/3 rounded mx-1 my-1 px-3 focus:lg:absolute focus:lg:mt-12 focus:lg:w-44"/>
            <button onClick ={handleSubmit} className="py-1 px-2 ml-1 bg-gray-500 rounded shadow-xl hover:bg-gray-600">Go</button>
        </div>
    )
}
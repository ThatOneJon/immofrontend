"use client"
import React from "react"



export default function CreateListing(){

    const[logRes, setLogRes] = React.useState("")
    const[isAuthenticated, setIsAuthenticated] = React.useState(null)
    const [formData, setFormData] = React.useState({
        title:"",
        squareMeters:"",
        price:"",
        description: "",
        city:"",
        image:"",
    })

    function handleChange(event){
        const value = event.target.value
        const name = event.target.name
        if(name === "title"){
            setFormData(pre => ({...pre, title: event.target.value }))
        }else if(name === "price"){
            setFormData(p => ({...p, price:value}))
        }else if(name === "square"){
            setFormData(p => ({...p, squareMeters:value}))
        }else if(name ==="description"){
            setFormData(p => ({...p, description:value}))
        }else if(name ==="img"){
            setFormData(p => ({...p, image:value}))
        }else if(name === "city"){
            setFormData(p => ({...p, city:value}))
        }else{
            console.log("Input error")
        }
    }

    // --------------------------------------------------------------------
    async function submit(){
        fetch("https://immpapi.onrender.com/api/addListing", {
            method: "post",
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json',
                //'Accept': 'application/json'
           },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if(data.errCatch){
                console.log(JSON.stringify(data.errCatch))
            }
            data.err ? (setLogRes(data.err)) : setLogRes(data.message)
        })
        setFormData({
            title:"",
            squareMeters:"",
            price:"",
            description: "",
            city:"",
            image:"",
        })
        location.reload()
    }
    // ------------------------------------------------------------------------
    React.useEffect( () =>{
        fetch("https://immpapi.onrender.com/api/loginstatus",{
         method: "get",
         credentials: 'include',
         headers:{
             'Content-Type': 'application/json'
             //'Accept': 'application/json'
        }})
         .then(response => response.json())
         .then(json => {
           try{
             setIsAuthenticated(json)
           }catch(error){
             console.log("Error!" + error)
           }
         })
     }, [])
 // --------------------------------------------------------------------
     if(isAuthenticated === null || isAuthenticated.message){
     return(
        <>
            <p className="text-center font-bold text-4xl mt-5 py-2">Login to add your own listings...</p>
        </>
        )
        
     }else if(isAuthenticated.error){
        console.log(isAuthenticated.error)
        return(
            <p className="text-center font-bold text-4xl mt-5 py-2">Not logged in: {isAuthenticated.error.message}!</p>
        )

     }else if(isAuthenticated.username){
        return(
            <>
            <div className=" my-10 py-5 grid grid-cols-1 lg:w-1/3 mx-auto border-2 border-black rounded p-4">
                <h1 className="text-center font-bold text-4xl" >Create your listing here:</h1>
                <h2 className="mx-auto mt-10 text-2xl">Your Title</h2>
                <input type="text" className="border-2 border-gray-300 rounded mt-3 p-1" name="title" onChange={(event) => handleChange(event)} value={formData.title} placeholder="Short titles work best ..."  />
                <h2 className="mx-auto mt-10 text-2xl">Price in Dollars</h2>
                <input type="text" className="border-2 border-gray-300 rounded mt-3 p-1" name="price" onChange={(event) => handleChange(event)} value ={formData.price} placeholder = "$$$" />
                <h2 className="mx-auto mt-10 text-2xl">Square Meters</h2>
                <input type="text" className="border-2 border-gray-300 rounded mt-3 p-1" name="square" onChange={(event) => handleChange(event)}  value ={formData.squareMeters} placeholder = "M²" />
                <h2 className="mx-auto mt-10 text-2xl">Description</h2>
                <textarea className="border-2 border-gray-300 rounded mt-3" name="description" rows={4} cols={40} onChange={(event) => handleChange(event)}  value ={formData.description} placeholder="Make sure to use great adjectives..." />
                <h2 className="mx-auto mt-10 text-2xl">City</h2>
                <input type="text" className="border-2 border-gray-300 rounded mt-3 mb-5 p-1" name="city" onChange={(event) => handleChange(event)}  value ={formData.city} placeholder = "Name of the city..." />
                <h2 className="mx-auto mt-10 text-2xl">Link to an image</h2>
                <input type="text" className="border-2 border-gray-300 rounded mt-3 mb-5 p-1" name="img" onChange={(event) => handleChange(event)}  value ={formData.image} placeholder="Valid link to an external image..." />
                <button className="bg-slate-900 text-white rounded w-1/4 mx-auto p-3 font-bold hover:bg-slate-600 my-5" onClick={submit}>Submit!</button>

            </div>
            </>
        )

        }else{
            <p className="text-center font-bold text-4xl mt-5 py-2">Login to add your own listings...</p>
        }
}
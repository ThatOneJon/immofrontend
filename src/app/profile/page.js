"use client"
import React from "react"
import SkullBlack from "next/image"
import Avatar from "next/image"
// Must use client side component in order to send the cookie for auth

export default function Profile(){
    const[loginStatus, setLoginStatus] = React.useState("")

    React.useEffect(() => {
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
                setLoginStatus(json)
              }catch(error){
                console.log("Error!" + error)
              }
            })
    }, [])
    console.log(loginStatus)

    let display = <h1 className="font-bold text-center text-3xl mt-10">Loading...</h1>
    if(loginStatus.message){
        display = 
        <div className="mx-auto lg:w-1/6 text-center flex flex-col align-middle justify-center text-xl">
            <SkullBlack src="/skullBlack.png" width="400" height="200" alt="skull" className="rounded-full" />
            <p className="font-bold underline">{loginStatus.message}</p> 
            <p>You are not logged in! </p>
        </div>
    }else if(loginStatus.username){
        display = 
        <div className>
            <div className="flex justify-center  lg:items-end mt-10 bg-slate-200 rounded lg:px-12 lg:py-3">
                <div className="text-center flex flex-col">
                    <h3 className="text-3xl mb-5 font-bold">@ {loginStatus.username}</h3>
                    <Avatar src="/Avatar.png"  width="200" height="200" alt="Avatar" className="my-3 rounded-full " />
                    <h4>Name: {`${loginStatus.first_name} ${loginStatus.last_name} `} </h4>
                    <h4>E-mail: {loginStatus.email} </h4>
                </div>
            </div>
        </div>
    }



    return(
        <div> 
            {display}
        </div>
    )
}
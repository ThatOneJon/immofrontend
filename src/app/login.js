import React from "react"


export default function Login(){

const[loginD, setLoginD] = React.useState({
    email : "",
    password : ""
})

const[logRes, setLogRes] = React.useState(null)

    function handleChange(e){
        if(e.target.name === "email"){
        setLoginD(pre => ({
            ...pre,
             email: e.target.value
        }))
    }else{
        setLoginD(pre => ({
            ...pre, password: e.target.value
        }))
        }
    }

   async function submit(){
        await fetch("https://immpapi.onrender.com/api/login",{
            method: "post",
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json',
                //'Accept': 'application/json'
           },
            body: JSON.stringify(loginD)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.errCatch){
                    console.log(JSON.stringify(data.errCatch))
                }
                data.err ? (setLogRes(data.err)) : setLogRes(data.message)
        })
        setLoginD({
            email : "",
            password : ""
        })
    }

    return(
        <div className="text-white mr-2 mt-1 flex flex-col md:flex-row align-center border-l-2 px-1">
            { logRes && <div onClick={() => setLogRes(null)} className="bg-white absolute text-black p-3 ml-7 mt-10 border-2 border-red-900 rounded">
            <p>{logRes}</p>
            <button onClick={() => setLogRes(null)} className="bg-slate-800 px-3 py-1 text-white rounded">Ok</button>

            </div> }
            <label className=" mx-1">Email: </label>
            <input onChange={(event) => handleChange(event)} name="email" value={loginD.email} type="text" className="focus:lg:absolute focus:lg:mt-12 focus:lg:w-44 text-black w-full rounded mx-1 my-1 md:w-2/3 px-3"/>
            <label className=" mx-1">Password: </label>
            <input onChange={(event) => handleChange(event)} name="pass" value = {loginD.password} type="password" className="text-black  focus:lg:absolute focus:lg:mt-12 focus:lg:w-44 w-full rounded mx-1 my-1 md:w-2/3 px-3 " />
            <button onClick={submit} className="py-1 px-2 ml-1 bg-gray-500 rounded shadow-xl hover:bg-gray-600">Go</button>
        </div>
    )
}
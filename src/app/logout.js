import React from "react"


export default  function Logout({register, login, auth, authTr}){
    const[logRes, setLogRes] = React.useState("")

    const logout = async () => {
       await fetch("https://immpapi.onrender.com/api/logout", {
            method: "get",
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json',
                //'Accept': 'application/json'
           },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.errCatch){
                console.log(JSON.stringify(data.errCatch))
            }
            data.err ? (setLogRes(data.err)) : setLogRes(data.message)
    })
    }

    function handleClick(){
        logout()
        register(false)
        login(false)
        auth(null)

    }


    return(
        <>
            { logRes && <div onClick={() => setLogRes(null)} className="bg-white absolute text-black p-3 ml-7 mt-10 border-2 border-red-900 rounded">
                <p>{logRes}</p>
                <button onClick={() => setLogRes(null)} className="bg-slate-800 px-3 py-1 text-white rounded">Ok</button>
            </div>
            }
            <button onClick={handleClick}>
                Logout
            </button>
        </>
    )
}
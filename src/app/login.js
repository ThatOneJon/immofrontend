

export default function Login(){
    return(
        <div className="text-white mr-2 mt-1 flex flex-col md:flex-row align-center border-l-2 px-1">
            <label className=" mx-1">Username: </label>
            <input id="in" type="text" className="text-black w-full rounded mx-1 my-1 md:w-2/3 px-3"/>
            <label className=" mx-1">Password: </label>
            <input id="in" type="text" className="text-black w-full rounded mx-1 my-1 md:w-2/3 px-3 " />
            <button className="py-1 px-2 ml-1 bg-gray-500 rounded shadow-xl hover:bg-gray-600">Go</button>
        </div>
    )
}
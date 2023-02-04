


export default function Register(){
    return(
        <div className="mr-2 mt-1 flex flex-col lg:flex-row align-center border-l-2 px-1">
            <label className=" mx-1">Username: </label>
            <input id="in" type="text" className="text-black w-full md:w-2/3 rounded mx-1 my-1 px-3 focus:lg:absolute focus:lg:mt-12 focus:lg:w-44"/>
            <label className=" mx-1">Email: </label>
            <input id="in" type="text" className="text-black w-full md:w-2/3 rounded mx-1 my-1 px-3 focus:lg:absolute focus:lg:mt-12 focus:lg:w-44"/>
            <label className=" mx-1">Password: </label>
            <input id="in" type="text" className="text-black w-full md:w-2/3 rounded mx-1 my-1 px-3 focus:lg:absolute focus:lg:mt-12 focus:lg:w-44"/>
            <button className="py-1 px-2 ml-1 bg-gray-500 rounded shadow-xl hover:bg-gray-600">Go</button>
        </div>
    )
}
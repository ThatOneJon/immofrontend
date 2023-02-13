
import {GoChecklist} from "react-icons/go"
import { Suspense } from 'react';
import CreateListing from "./newListing";

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
export default async function Listings(){

    try{
    const listings = await fetch("https://immpapi.onrender.com/api/listings")
    const listJsons = await listings.json()

    return(
        <Suspense fallback={<Loading />} >
            <h1 className="flex flex-row justify-center text-center font-bold text-4xl my-5 border-slate-900 border-2 rounded bg-slate-300 py-3">Some of our current premium listings! <GoChecklist className="ml-4 text-5xl" /> </h1>
            <div className="flex flex-col lg:flex-row  justify-between ">
                {listJsons.map(l => { 
                return(
                    <div key={l.title} className="lg:w-1/4 bg-slate-300 m-5 rounded border-slate-900 border-2 text-center">
                        <img src={l.image} alt="image" className="h-96 object-fill rounded mx-auto" />
                        <h1 className="font-bold text-2xl bg-slate-900 text-white py-2 mb-5">{l.title}</h1>
                        <h2 className="font-bold underline text-lg mb-5">{l.squareMeters} m² = {l.squareMeters * 10.764} sq. ft</h2>
                        <h3 className="font-bold text-xl bg-slate-900 text-white py-2 mb-5">{l.price} $</h3>
                        <div className="h-32"><p className="p-5 text-lg mb-3">{l.description}</p></div>
                        <button className="bg-slate-900 p-3 rounded text-white hover:shadow-black hover:shadow-lg mb-2">Show interest!</button>
                    </div>
                )})
            }
            </div>
            <CreateListing />
        </Suspense>
        )
    }


    catch(error){
        return (
        <p>{error}</p>
        )
    }
}
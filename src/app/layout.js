"use client"
import './globals.css'
import styles from './page.module.css'
import Skull from "next/image"
import React from "react"
import Link from "next/link"
import { FaLock, FaLockOpen } from 'react-icons/fa'
import Login from "./login"
import Register from "./Register"


export default function RootLayout({ children }) {

  const [menuT, setMenuT] = React.useState(false)
  const[loginMenu, setLoginMenu] = React.useState(false)
  const[renderLogin, setRenderLogin] =React.useState(false)
  const[renderRegister, setRenderRegister] =React.useState(false)

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
          <nav className="bg-custom lg:m-5 lg:mx-20 py-3 lg:rounded-lg flex ">
            <div className="flex flex-wrap items-center justify-between w-full ">
              <div className ="md:ml-32 ml-10 w-1/8 relative">
                <div className="h-20 w-20 absolute opacity-40 rounded-full breathing ml-5 mt-3"></div>
                <Skull className="object-scale-down ml-2" src="/Skull.png" alt ="aSkull" width="100" height="100" />
                <h1 className = "text-white mt-3 text-lg font-bold">JC & Clarksons</h1>
              </div>
              <button onClick={() => setMenuT(p => !p)} type="button" className="inline-flex items-center p-2 ml-3 mr-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                <span className="sr-only">Open main menu</span>
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
              <div className={`${!menuT ? "hidden" : "block"} w-full md:block  md:h-1/2 md:w-1/2 md:mr-64 `} >
                <ul className="text-xl md:text-2xl font-bold text-center flex flex-col p-4 mt-4 border rounded-lg  md:flex-row md:justify-evenly md:space-x-14 md:mt-0 md:font-medium md:border-0 text-white">
                  <li><Link href="#">Home</Link></li>
                  <li><Link href="#">Listings</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <button onClick = {() =>  setLoginMenu(pr => !pr)} id="dropdownDefaultButton">  <li className=" text-md p-0 m-0 ">{ loginMenu ? <FaLockOpen /> :<FaLock /> }</li></button>
                  <div className= {`${ loginMenu ? "flex" : "hidden"} text-lg font-bold py-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-fit dark:bg-gray-700`}>
                    <ul className={`${ loginMenu ? "flex" : "hidden"}  text-gray-700 dark:text-gray-200 px-2`}>
                      <li className=" px-5 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer" onClick={() =>{setRenderLogin(p => !p), setRenderRegister(false)}}>Login</li>
                      <li className=" px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer" onClick={() =>{setRenderRegister(p => !p), setRenderLogin(false)}}>Register</li>
                      { renderLogin && <Login/>}
                      {renderRegister && <Register />}
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
          <main className="md:m-5 md:mx-20 py-1">
            {children}
          </main>
        </body>
    </html>
  )
}

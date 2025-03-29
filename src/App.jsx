import React from "react";
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Highlight from "./components/highlights"
import Model from "./components/Model"

export default function App(){
  return(
    <div>
      <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
      </main>
    </div>
  )
}
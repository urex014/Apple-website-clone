import React from "react";
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Highlight from "./components/highlights"

export default function App(){
  return(
    <div>
      <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/>
      </main>
    </div>
  )
}
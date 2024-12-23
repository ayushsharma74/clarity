import React from 'react'
import { Github, Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black text-white px-2 py-2 border-b border-zinc-800">
    <div className="font-semibold text-2xl flex items-center gap-2 justify-center">
      ClarityAI <Sparkles />
    </div>
    <div className="flex gap-2 font-semibold text-xl items-center border border-zinc-800 px-2 py-2 rounded-lg hover:bg-zinc-800 transition-colors duration-300 cursor-pointer">
       <Github />
    </div>
   </nav>
  )
}

export default Navbar
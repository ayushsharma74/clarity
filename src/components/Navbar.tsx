import React from 'react'
import { Github, Sparkles } from "lucide-react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black text-white px-2 py-2 border-b border-zinc-800">
    <Link href={"/"}  className="font-semibold text-2xl flex items-center gap-2 justify-center">
      ClarityAI <Sparkles />
    </Link >
    <Link href={"https://github.com/ayushsharma74/clarity"} target='_blank' className="flex gap-2 font-semibold text-xl items-center border border-zinc-800 px-2 py-2 rounded-lg hover:bg-zinc-800 transition-colors duration-300 cursor-pointer">
       <Github />
    </Link>
   </nav>
  )
}

export default Navbar
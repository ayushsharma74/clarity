import WordPullUp from "@/components/ui/word-pull-up";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-black text-white relative">
      <div className="flex justify-center items-center flex-col gap-7 bg-black text-white absolute top-12 max-w-[900px]">
      <WordPullUp className="text-7xl text-center font-bold" words="Understand Complex Documents Easily & Effortlessly." />
        <p className="text-center text-base">Scratching your head and  <RoughNotation type="underline" show={true} animationDelay={300} strokeWidth={2}>  frustrated  </RoughNotation>because you can&apos;t Understand complex research papers and studies? Drop it here and let the AI explain you every line in a easy way with <RoughNotation type="circle" show={true} animationDelay={1000} strokeWidth={2} >  clarity </RoughNotation> </p>
        <Link href={"/dashboard"} className="bg-white hover:text-white hover:bg-zinc-800 transition-colors duration-300 text-black px-4 py-2 rounded-lg font-bold">
          Get Started
        </Link >
      </div>
    </main>
      
  );
}

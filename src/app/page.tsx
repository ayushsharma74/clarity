export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-black text-white relative">
      <div className="flex justify-center items-center flex-col gap-7 bg-black text-white absolute top-48 max-w-[900px]">
        <h1 className="text-5xl text-center font-bold">Understand Complex Documents Instantly, Effortlessly.</h1>
        <button className="bg-white hover:text-white hover:bg-zinc-800 transition-colors duration-300 text-black px-4 py-2 rounded-lg font-bold">
          Get Started
        </button>
      </div>
    </main>
  );
}

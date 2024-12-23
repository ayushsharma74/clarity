import { Paperclip, SendHorizontal } from "lucide-react";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-w-full h-screen bg-black flex text-white">
      <div className="w-1/2 h-full flex gap-3 flex-col justify-between items-center border border-zinc-800 p-4 rounded-lg">
        <div className="border border-zinc-800 w-full h-full rounded-lg flex items-end justify-start p-4">
            {/* divs of messages */}
            <div className="">
                <div className="bg-zinc-800 p-2 rounded-lg w-max">
                    <p>Hey There</p>
                </div>
            </div>
          <div />
        </div>
        <div className="flex items-center gap-2 w-full">
          <input
            type="text"
            placeholder="Write Message"
            className="bg-black border border-zinc-800 rounded-lg p-2 w-full"
          />
          <button className="border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors duration-300 p-2">
            <Paperclip />
          </button>
          <button className="border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors duration-300 p-2">
            <SendHorizontal />
          </button>
        </div>
      </div>
      <div className="w-1/2 h-full flex gap-3 flex-col justify-between items-center border border-zinc-800 p-4 rounded-lg">
        <div className="w-full h-full flex flex-col items-center gap-3">
            <div className="border border-zinc-800 w-full h-full rounded-lg ">
            <h1 className="text-2xl font-bold text-center py-2 border-b border-zinc-800">Output</h1>

            </div>
        </div>
      </div>
    </div>
  );
};

export default page;

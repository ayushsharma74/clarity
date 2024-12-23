'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Paperclip, Send, X } from 'lucide-react'


interface Message {
  id: number
  text: string
  timestamp: Date
  fileName?: string
}

export default function Home() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [output, setOutput] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

 const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     if (!message.trim() && !file) return;
   
     setLoading(true);
     setError(null);

     const newMessage: Message = {
       id: Date.now(),
       text: message,
       timestamp: new Date(),
       fileName: file ? file.name : undefined
     };
   
     setMessages(prev => [...prev, newMessage]);
     setMessage('');
     setFile(null);
 
     try {
         const res = await fetch('/api/gemini', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ prompt: message }),
         });
   
         if (!res.ok) {
           const errorData = await res.json();
            throw new Error(errorData.error || 'Failed to fetch data')
         }
   
         const data = await res.json();
        setOutput(data.text);
        console.log(data);
        
       } catch (err: any) {
         console.error('Error fetching Gemini API', err)
         setError(err.message);
       } finally {
         setLoading(false);
       }
     
   };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <main className="flex h-screen bg-black border border-zinc-800">
      {/* Left Section */}
      <div className="w-1/3 border-r border-zinc-800 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className="bg-zinc-900 rounded-lg p-3 text-zinc-100"
            >
              <p className="mb-1">{msg.text}</p>
              {msg.fileName && (
                <p className="text-sm text-zinc-400 mb-1">
                  Attached: {msg.fileName}
                </p>
              )}
              <time className="text-xs text-zinc-500">
                {msg.timestamp.toLocaleTimeString()}
              </time>
            </div>
          ))}
        </div>
        <form 
          onSubmit={handleSubmit}
          className="border-t border-zinc-800 p-4 flex flex-col gap-2"
        >
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write Message"
              className="flex-1 bg-transparent text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <Button 
              size="icon" 
              variant="ghost" 
              className="text-zinc-500 hover:text-zinc-400"
              type="button"
              onClick={() => fileInputRef.current?.click()}
            >
              <Paperclip className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost"
              className="text-zinc-500 hover:text-zinc-400"
              type="submit"
              disabled={loading}
            >
             {loading ? 'Loading...' :  <Send className="h-5 w-5" />}
            </Button>
          </div>
          {file && (
            <div className="flex items-center gap-2 text-zinc-100 text-sm">
              <span className="truncate">{file.name}</span>
              <Button
                size="icon"
                variant="ghost"
                className="text-zinc-500 hover:text-zinc-400"
                onClick={handleRemoveFile}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
          {error && (
             <div style={{ color: 'red'}}>
                {error}
             </div>
           )}
        </form>
      </div>

      {/* Right Section */}
      {
        loading ? (
          <div className="w-2/3 flex items-center bg-zinc-500 animate-pulse justify-center">
            <div className="spinner-border text-zinc-500">Loading</div>
          </div>
        ) : (
          <div className="w-2/3 flex flex-col overflow-y-auto">
            <div className="border-b border-zinc-800 p-4">
              <h2 className="text-zinc-100 font-semibold">Output</h2>
            </div>
            <div className="flex-1 p-4">
              <pre className="text-zinc-100 font-mono whitespace-pre-wrap">
                {output}
              </pre>
            </div>
          </div>
        )
      }
      {/* <div className="w-2/3 flex flex-col overflow-y-scroll">
        <div className="border-b border-zinc-800 p-4">
          <h2 className="text-zinc-100 font-semibold">Output</h2>
        </div>
        <div className="flex-1 p-4">
          <pre className="text-zinc-100 font-mono whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      </div> */}
    </main>
  )
}
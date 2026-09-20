import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'

import icon from '/Icon.png'

const myName = 'Talked Chat'

createRoot(document.querySelector('body')!).render(

  <StrictMode>

    <main className="min-h-screen flex flex-col bg-[#080b12] text-white font-sans p-3 gap-3">

      <header className="flex justify-between items-center bg-[#0d111c] border border-[#1b2230] rounded-2xl px-5 py-4 shadow-lg">

        <div className="flex items-center gap-3">

          <img
            className="w-11 h-11 rounded-xl object-cover"
            src={icon}
            alt="Talked Chat"
          />

          <div>

            <h1 className="text-xl font-bold tracking-tight">
              {myName}
            </h1>

            <p className="text-xs text-gray-500">
              Simple and fast conversations
            </p>

          </div>

        </div>

        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />

      </header>

      <div className="flex flex-col flex-1 min-h-0">

        <div className="flex-1 p-4 overflow-y-auto space-y-3">

          <div className="flex justify-start">

            <div className="max-w-[75%] bg-[#111722] border border-[#1d2635] px-4 py-3 rounded-2xl rounded-bl-md shadow-md">

              <p className="text-sm text-gray-200">
                Hello! 👋 Welcome to Talked Chat.
              </p>

            </div>

          </div>

          <div className="flex justify-end">

            <div className="max-w-[75%] bg-[#2638a8] px-4 py-3 rounded-2xl rounded-br-md shadow-lg">

              <p className="text-sm">
                I'm testing my new chat!
              </p>

            </div>

          </div>

        </div>

        <div className="flex items-center gap-3 bg-[#0d111c] border border-[#1b2230] p-3 rounded-2xl shadow-xl">

          <input
            className="flex-1 bg-[#080b12] border border-[#1b2230] text-white placeholder:text-gray-600 rounded-xl px-4 py-3 outline-none transition focus:border-[#3548d4] focus:ring-1 focus:ring-[#3548d4]"
            type="text"
            placeholder="Type a message..."
          />

          <button
            className="px-5 py-3 bg-[#3548d4] hover:bg-[#4356e8] active:scale-95 transition-all duration-200 rounded-xl font-semibold shadow-lg shadow-blue-950/40"
          >
            Send
          </button>

        </div>

      </div>

      <footer className="text-center bg-[#0d111c] border border-[#1b2230] rounded-2xl py-3">

        <h6 className="text-xs text-gray-600">

          Developed by{' '}

          <u className="text-gray-400 hover:text-white transition cursor-pointer">
            Guilherme Soares Marciel
          </u>

        </h6>

      </footer>

    </main>

  </StrictMode>,

)
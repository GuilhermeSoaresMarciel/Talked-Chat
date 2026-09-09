import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import img_main from "/Talked Chat.png";

import Message from "./components/Message";

const bgMain = "bg-[rgb(40,40,50)]";
const bgSecond = "bg-[rgb(30,30,40)]";
const colorOn = "bg-[rgb(40,50,60)]";
const colorOff = "bg-[rgb(60,50,40)]";

const pMain = "p-2";

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <header
      className={`${bgSecond} flex justify-between items-center ${pMain}`}
    >
      <img className="w-[50px]" src={img_main} />
      <h1 className="font-bold">Talked Chat</h1>
    </header>
    <main className={`flex flex-col flex-1  ${pMain}`}>
      <div className="w-[100%] flex-1">
        <Message m_text="Hello, I am Talked Chat, how are you?" />
      </div>
      <div className="w-[100%] flex gap-2">
        <input className={`flex-1 ${colorOff} rounded-2xl`} type="text" />
        <button className={`${colorOn} rounded-2xl ${pMain}`}>Enviar</button>
      </div>
    </main>
    <footer className={`text-center ${bgSecond} ${pMain}`}>
      <h6>
        Developed by: <u>Guilherme Soares Marciel</u>
      </h6>
    </footer>
  </StrictMode>,
);

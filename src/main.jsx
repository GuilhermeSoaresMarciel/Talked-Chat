import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "./index.css";

import img_main from "/Talked Chat.png";

import Message from "./components/Message";

function defAPI() {
  fetch("/TalkedChat/get")
    .then((response) => response.json())
    .then((data) => {
      const chat = document.querySelector("#obj_chat");

      chat.innerHTML = "";

      data.forEach((message) => {
        const element = document.createElement("div");

        element.textContent = message;

        chat.appendChild(element);
      });
    });
}

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <header>
      <img src={img_main} />
      <h1 className="text-2xl font-extrabold">Talked Chat</h1>
    </header>

    <main>
      <div className="obj_chat" id="obj_chat"></div>

      <div className="obj_input">
        <input type="text" placeholder="Write Here" id="textHere" />

        <button
          onClick={() => {
            const content = document.querySelector("#textHere").value;
          }}
        >
          Send
        </button>
      </div>
    </main>

    <footer>
      <h6 className="italic">
        Developed by: <u>Guilherme Soares Marciel</u>
      </h6>
    </footer>
  </StrictMode>,
);

setTimeout(() => {
  defAPI();
}, 0);

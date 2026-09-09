import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import img_main from "/Talked Chat.png";

import Message from "./components/Message";

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <header>
      <img src={img_main} />

      <h1 className="text-2xl font-extrabold">Talked Chat</h1>
    </header>

    <main>
      <div className="obj_chat" id="obj_chat">
        <Message m_text="Hello, I am Talked Chat, how are you?" />
      </div>

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

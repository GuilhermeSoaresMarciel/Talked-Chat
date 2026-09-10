import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Message from "./components/Message.jsx";

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <header>
      <img src="/Talked Chat.png" />
      <h1 className="text-2xl font-extrabold">Talked Chat</h1>
    </header>

    <main>
      <div className="obj_chat">
        <Message m_text="Hi" />
      </div>

      <div className="obj_input">
        <input type="text" placeholder="Write Here" id="textHere" />

        <button type="submit">Send</button>
      </div>
    </main>

    <footer>
      <h6 className="italic">
        Developed by: <u>Guilherme Soares Marciel</u>
      </h6>
    </footer>
  </StrictMode>,
);

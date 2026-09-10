import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Message from "./components/Message.jsx";

function showMessage(m_text) {
  const element_main = document.createElement("p");

  element_main.className = "showMessage";

  element_main.textContent = m_text;

  setTimeout(() => {
    element_main.remove();
  }, 3000);

  document.body.appendChild(element_main);
}

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

        <button
          onClick={() => {
            const m_fild = document.querySelector("#textHere").value;

            if (m_fild == "") {
              showMessage("empty field");
            }
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

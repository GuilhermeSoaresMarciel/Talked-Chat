import { useEffect, useState } from "react";

import Message from "./components/Message";

function App() {
  const [chat, setChat] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/TalkedChat/get")
      .then((response) => response.json())
      .then((data) => setChat(data));
  }, []);

  function sendMessage(event) {
    event.preventDefault();

    const content = text.trim();

    if (!content) {
      return;
    }

    fetch("/TalkedChat/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: content }),
    })
      .then((response) => response.json())
      .then((message) => {
        setChat((currentChat) => [...currentChat, message]);
        setText("");
      });
  }

  return (
    <>
      <header>
        <img src="/Talked Chat.png" />
        <h1 className="text-2xl font-extrabold">Talked Chat</h1>
      </header>

      <main>
        <div className="obj_chat" id="obj_chat">
          {chat.map((message, index) => (
            <Message key={`${message}-${index}`} m_text={message} />
          ))}
        </div>

        <form className="obj_input" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Write Here"
            id="textHere"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />

          <button type="submit">Send</button>
        </form>
      </main>

      <footer>
        <h6 className="italic">
          Developed by: <u>Guilherme Soares Marciel</u>
        </h6>
      </footer>
    </>
  );
}

export default App;

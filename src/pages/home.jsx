import { useState } from "react";
import Message from "../components/Message";
import logo from "../../public/Talked Chat.png";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function handleSendMessage() {
    setMessages([...messages, message]);

    setMessage("");
  }

  function handleClearMessages() {
    setMessages([]);
  }

  return (
    <>
      <header className="flex items-center justify-around p-2 border-b border-zinc-600">
        <img src={logo} alt="Logo" className="size-12" />
        <h1 className="text-2xl">
          Talked<span className="font-extrabold text-lime-500">Chat</span>
        </h1>
      </header>

      <main className="max-w-3xl w-full mx-auto flex-1 flex flex-col">
        <div className="flex-1">
          <Message messages={messages} setMessages={setMessages} />
        </div>

        <div className="bg-zinc-950 flex p-2 gap-2">
          <input
            type="text"
            placeholder="Write Here"
            className="border border-zinc-500 rounded p-2 outline-none flex-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="flex items-center gap-1">
            <button
              onClick={handleSendMessage}
              disabled={!message}
              className="bg-lime-500 p-2 rounded disabled:cursor-not-allowed disabled:bg-zinc-300"
            >
              Send
            </button>
            <button
              className="bg-red-500 p-2 rounded disabled:cursor-not-allowed disabled:bg-red-300"
              onClick={handleClearMessages}
              disabled={!messages.length}
            >
              Clear
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-zinc-800 p-2 text-center">
        <p className="text-xs">
          Developed by{" "}
          <a
            href="https://github.com/GuilhermeSoaresMarciel"
            target="_blank"
            className="font-semibold hover:underline"
          >
            Guilherme Soares Marciel
          </a>
        </p>
      </footer>
    </>
  );
}

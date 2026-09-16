function Message({ messages, setMessages }) {
  function handleDeleteMessageById(id) {
    if (confirm("Deseja realmente apagar esta mensagem?")) {
      const filteredMessages = messages.filter(
        (_message, index) => index !== id,
      );
      setMessages(filteredMessages);
      return;
    }
  }

  return (
    <div className="text-center p-4 flex flex-col gap-2">
      {!messages.length ? (
        <p>No messages</p>
      ) : (
        messages.map((message, index) => (
          <p key={index} className="bg-lime-300 rounded p-2 text-black">
            {message}{" "}
            <button
              onClick={() => handleDeleteMessageById(index)}
              className="bg-red-500 size-6 rounded-full text-white text-xs"
            >
              X
            </button>
          </p>
        ))
      )}
    </div>
  );
}

export default Message;

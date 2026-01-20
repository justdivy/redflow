// components/ChatBox.jsx
import { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsChatDots } from "react-icons/bs";

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { type: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { type: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Something went wrong. Please try again!" },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition"
        >
          <BsChatDots size={24} />
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white w-80 h-96 rounded-xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-red-600 text-white p-4 flex justify-between items-center">
            <h4 className="font-semibold">Red-Flow AI</h4>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md max-w-[80%] ${
                  msg.type === "user"
                    ? "bg-red-100 self-end ml-auto text-right"
                    : "bg-gray-100 self-start text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border rounded-md outline-none"
              placeholder="Ask me anything..."
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm rounded-md transition"
            >
              Send
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default ChatBox;

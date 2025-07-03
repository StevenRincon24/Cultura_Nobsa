import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function ChatBotButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-4">
      {open && (
        <div className="bg-white p-1 rounded-xl shadow-xl w-[90vw] max-w-[350px] h-[70vh] md:h-[500px] md:w-[350px] transition-all">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/WMJtVA5KCLEv7LpJZQ9yo"
            width="100%"
            height="100%"
            style={{ border: "none", borderRadius: "0.75rem" }}
            title="Chatbot de Nobsa"
          />
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 bg-red-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center overflow-hidden p-0"
      >
        {open ? (
          <IoMdClose className="text-3xl" />
        ) : (
          <img
            src="/images/Gif.gif"
            alt="Chatbot Icon"
            className="w-full h-full object-cover"
          />
        )}
      </button>
    </div>
  );
}

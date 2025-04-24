import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function ChatBotButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse md:flex-row items-end gap-4">
      {open && (
        <div className="bg-blue-200 p-2 rounded-lg shadow-lg w-[90vw] max-w-[350px] h-[430px] md:w-[350px]">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/WMJtVA5KCLEv7LpJZQ9yo"
            width="100%"
            height="100%"
            style={{ border: "none", borderRadius: "0.5rem" }}
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
            src="https://i.postimg.cc/yd6bmZtT/483206058003201.gif"
            alt="Chatbot Icon"
            className="w-full h-full object-cover rounded-full"
          />
        )}
      </button>
    </div>
  );
}

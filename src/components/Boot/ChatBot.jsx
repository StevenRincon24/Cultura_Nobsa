import { useState } from "react";
import { GiGreekTemple } from "react-icons/gi";

export default function ChatBotButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <GiGreekTemple className="text-2xl" />
      </button>

      {open && (
        <div className="absolute bottom-16 right-0 bg-white p-2 rounded-lg shadow-lg w-[350px] h-[430px]">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/WMJtVA5KCLEv7LpJZQ9yo"
            width="100%"
            height="100%"
            style={{ border: "none", borderRadius: "0.5rem" }}
            title="Chatbot de Nobsa"
          />
        </div>
      )}
    </div>
  );
}

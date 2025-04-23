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
            title="Chatbot de cultura"
            allow="microphone;"
            width="100%"
            height="100%"
            src="https://console.dialogflow.com/api-client/demo/embedded/b1efeb57-25d1-4cd9-a36d-95631292d3ca"
            className="rounded-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
}

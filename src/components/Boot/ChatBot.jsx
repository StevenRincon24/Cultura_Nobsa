import { useState } from "react";
import { GiGreekTemple } from "react-icons/gi";

export default function ChatBotButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={() => setOpen(!open)}
        className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <GiGreekTemple className="text-2xl" />
      </button>

      {open && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-64">
          <p className="text-gray-800 text-sm">
            ¡Hola! ¿Quieres conocer más sobre nuestra cultura?
          </p>
        </div>
      )}
    </div>
  );
}

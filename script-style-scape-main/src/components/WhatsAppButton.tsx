import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Replace with actual number
  const message = "Hello Felinum Limited! I'm interested in your products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 w-16 h-16 rounded-full bg-green-500/30 animate-ping" />
        
        {/* Button */}
        <div className="relative w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 pulse-glow">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat with us!
          <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-foreground" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;

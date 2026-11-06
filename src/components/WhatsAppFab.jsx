import { MessageCircle } from 'lucide-react'
import { WHATSAPP_PRIMARY } from '../data/site'

export default function WhatsAppFab() {
  return (
    <a
      className="fab"
      href={WHATSAPP_PRIMARY}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Hwillerz FX on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
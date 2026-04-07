import Link from "next/link";
import Image from "next/image";
export default function WhatsAppFloat() {
  const link =
    "https://wa.me/553186191591?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.";

  return (
    <Link
      href={link}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        height={60}
        width={60}
        src="/images/whatssapp.svg"
        alt="Fale conosco pelo WhatsApp"
      />
    </Link>
  );
}

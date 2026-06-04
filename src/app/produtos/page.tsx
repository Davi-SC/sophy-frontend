import type { Metadata } from "next";
import ProdutosPageClient from "./ProdutosPageClient";

export const metadata: Metadata = {
  title: "Produtos | Sophy Store",
  description: "A vitrine virtual da Sophy Store está em construção. Entre em contato conosco no WhatsApp para conferir nossa coleção atual.",
};

export default function ProdutosPage() {
  return <ProdutosPageClient />;
}

import type { Metadata } from "next";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import Rodape from "../components/Rodape/Rodape";
import CanvasBackground from "../components/CanvasBackground"; // <- Importa aqui
import "./globals.css";

export const metadata: Metadata = {
  title: "Esse é meu portfólio",
  description: "Portfólio do Pedro Henrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body style={{ position: "relative", overflowX: "hidden" }}>
        <CanvasBackground />
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}

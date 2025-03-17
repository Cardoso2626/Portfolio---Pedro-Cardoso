import type { Metadata } from "next";



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
      <body>
        {children}
      </body>
    </html>
  );
}

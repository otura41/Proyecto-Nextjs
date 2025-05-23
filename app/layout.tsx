//Agregue estilos globales a su aplicación navegando hasta /app/layout.tsxel archivo e importándolo global.css:
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
           <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

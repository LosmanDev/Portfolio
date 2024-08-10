import { ThemeProvider } from './context/ThemeProvider';
import type { Metadata } from 'next';
import { AuroraBackground } from './components/ui/AuroraBackground';
import { Kameron } from 'next/font/google';
import './globals.css';

const kameron = Kameron({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "LosmanDev's Portfolio",
  description:
    'Personal portfolio site for Full Stack Software Engineer Liban Osman',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kameron.className} h-full`}>
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`${kameron.className} flex flex-col min-h-screen m-0 p-0`}
      >
        <ThemeProvider>
          <AuroraBackground className="flex-grow flex flex-col">
            <main className="flex-grow flex flex-col">{children}</main>
          </AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}

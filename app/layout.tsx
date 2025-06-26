import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from './context/LanguageContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Túlio Zanella - Portfolio',
  description: 'Portfolio of Túlio Zanella, a Software Developer and Data Analysis Enthusiast, showcasing projects, skills, and experience in web development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/icon.png" sizes="any" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider attribute="class" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

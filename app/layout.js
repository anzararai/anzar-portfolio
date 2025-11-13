import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});



export const metadata = {
  title: "Anzar Arai - Frontend Developer | React & Next.js",
  description: "Frontend Developer specializing in React.js, Next.js, and Tailwind CSS. Building modern, responsive web applications. Based in Mumbai, India.",
  keywords: 'frontend developer, react developer, next.js developer, web developer mumbai, anzar arai',
  authors: [{ name: 'Anzar Arai' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});



export const metadata = {
  title: "Anzar Arai - Full Stack (MERN) Developer | React, Next.js, Node.js",
  description: "Full Stack (MERN) Developer specializing in React.js, Next.js, Node.js, Express, and MongoDB. I build scalable, modern, and responsive web applications with clean UI and robust backend APIs.",
  keywords: 'full stack developer, mern stack developer, react.js developer, next.js developer, node.js developer, express.js developer, full stack web developer, portfolio website',
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

import { Inter } from "next/font/google";
import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import ContextProvider from "@/components/clients/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "This is a todo app project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <>
            <Navbar />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}

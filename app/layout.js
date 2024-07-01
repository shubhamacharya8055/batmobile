import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"] , 
  display: "swap",
  weight: ["100" , "200" , "300" , "400" , "500" , "600", "700", "800", "900"]
})

export const metadata = {
  title: "Bat Mobile | Scale your Vision",
  description: "The Bat Co. which looks after the technical aspects of Bat motors and company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} no-scrollbar`}>
        <Navbar />
      <main>
          {children}
        </main>
        <Toaster />
        </body>
    </html>
  );
}

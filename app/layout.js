import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";


export const metadata = {
  title: "LWS Kitchen",
  description: "Next JS App",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-white"
      >
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}

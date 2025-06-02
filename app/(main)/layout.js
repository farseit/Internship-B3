import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

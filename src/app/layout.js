import "./globals.css";
import Header from "@components/header/index"
export default function RootLayout({ children }) {
  return (
    <div className="w-full max-w-[600px] mx-auto px-[10px]">
       <Header/>
      <div>{children}</div>
    </div>
  );
}

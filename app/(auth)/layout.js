import "../globals.css";
import StoreProvider from "../StoreProvider";

export default function AuthLayout({ children }) {
  return (
    <html>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

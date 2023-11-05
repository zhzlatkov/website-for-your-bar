import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import dotenv from "dotenv";
import { OrderProvider } from "@/context/OrderContext";
import { UserSessionProvider } from "@/context/SessionContext";

dotenv.config();
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <UserSessionProvider>
      <OrderProvider>
        <Component {...pageProps} />
      </OrderProvider>
    </UserSessionProvider>
  );
}

import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/clerk-react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const publishableClertkApiKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;
  return (
    <>
      <ClerkProvider publishableKey={publishableClertkApiKey}>
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);

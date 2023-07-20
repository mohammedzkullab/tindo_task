import type { AppProps } from "next/app";
import { MainLayout } from "layouts";
import type { NextPageWithLayout } from "types";
import "styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getNestedLayout = Component.getNestedLayout ?? ((page: any) => page);
  const mainLayoutProps = Component.mainLayoutProps ?? {
    title: "Tindo Task",
  };

  return (
    <MainLayout {...mainLayoutProps}>
      {getNestedLayout(<Component {...pageProps} />)}
    </MainLayout>
  );
}

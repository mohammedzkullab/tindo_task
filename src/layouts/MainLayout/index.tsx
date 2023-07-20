import Head from "next/head";
import { MainLayoutType } from "components/types";
import React from "react";
import NoSsr from "components/NoSsr";

export const MainLayout: MainLayoutType = ({
  children,
  title,
  pageDescription = "Talents Valley platform",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center flex-1 p-5 mt-16 sm:items-center ">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

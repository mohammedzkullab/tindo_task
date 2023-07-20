import { MainLayoutProps } from "components/types";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getNestedLayout?: (page: ReactElement) => ReactNode;
    mainLayoutProps?: Omit<MainLayoutProps, "children">;
};
'use client';

import { ReactNode } from "react";
import { SWRConfig } from "swr";
import fetcher from "./fetcher";

const SWRProvider = ({ children }: { children: ReactNode }) => {
    return <SWRConfig value={{ fetcher, revalidateIfStale: true, revalidateOnMount: true }}>{children}</SWRConfig>
}

export default SWRProvider;
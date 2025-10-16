"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore } from "@/app/store/store";
import { makeStore } from "@/app/store/store";

export default function StoreProvider({
  children,
  preloadedState,
}: {
  children: React.ReactNode;
  preloadedState?: unknown;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore(preloadedState);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

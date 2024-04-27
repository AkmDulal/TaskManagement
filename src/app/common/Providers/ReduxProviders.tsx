"use client";
import { store } from "@/common/store";
import { Provider } from "react-redux";
function ReduxProviders({ children }: any) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}

export default ReduxProviders;

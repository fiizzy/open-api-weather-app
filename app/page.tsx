"use client";
import { HomeComponent } from "@/components/HomeComponent";
import { HomeContext, HomeContextProvider } from "@/context/HomeContext";
import { useContext } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeContextProvider>
        <HomeComponent />
      </HomeContextProvider>
    </main>
  );
}

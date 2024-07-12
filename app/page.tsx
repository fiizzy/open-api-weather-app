"use client";
import { HomeComponent } from "@/components/HomeComponent";
import { HomeContextProvider } from "@/context/HomeContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 ">
      <HomeContextProvider>
        <HomeComponent />
      </HomeContextProvider>
    </main>
  );
}

"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
export default function ClientLayout({ children }) {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#20271c",
            color: "#f3f5ed",
            border: "1px solid #526643",
          },
        }}
      />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

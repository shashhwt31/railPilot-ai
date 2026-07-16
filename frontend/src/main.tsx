import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BookingProvider } from "@/context/BookingContext";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookingProvider>
  <App />
  <Toaster richColors position="top-right" />
</BookingProvider>
  </React.StrictMode>
);
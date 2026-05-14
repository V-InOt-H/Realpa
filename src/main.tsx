
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered:", registration.scope);

        // Check for updates on an interval
        setInterval(() => {
          registration.update();
        }, 60 * 1000); // every 60s

        // Prompt user when a new SW is waiting
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              // New content available - prompt reload
              const notify = () => {
                const reload = confirm("A new version is available. Reload now?");
                if (reload) {
                  newWorker.postMessage({ type: "SKIP_WAITING" });
                  window.location.reload();
                }
              };
              notify();
            }
          });
        });
      })
      .catch((err) => {
        console.warn("SW registration failed:", err);
      });
  });
}
  
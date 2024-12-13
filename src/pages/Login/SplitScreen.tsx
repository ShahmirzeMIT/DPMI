import { useState, useEffect } from "react";
import "./SplitScreen.css";

export default function SplitScreen() {
  const [currentTab, setCurrentTab] = useState<string>(
    localStorage.getItem("currentTab") || "top-left" // Default olaraq sol hissə
  );

  const [iframeData, setIframeData] = useState<string | null>(null);

  // Handle tab changes and save to localStorage
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    localStorage.setItem("currentTab", tab);
  };

  const handleIframeClick = (tab: string) => {
    setCurrentTab(tab);
    localStorage.setItem("currentTab", tab);
    console.log(`Iframe clicked: ${tab}`);
  };

  // Request data from iframe
  const requestIframeData = () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      // Send message to iframe to fetch data
      iframe.contentWindow?.postMessage("getProList", "https://acfsimulation.com");
    }
  };

  // Listen for messages from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === "https://acfsimulation.com") { // Ensure it's from the right iframe origin
        setIframeData(event.data); // Set iframe data to state
        console.log("Received data from iframe:", event.data);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  console.log("iframeData:", iframeData);

  return (
    <div className="split-container">
      {/* Yuxarı hissə */}
      <div className="top-section">
        {/* Sol tərəf */}
        <div
          className={`top-left ${currentTab === "top-left" ? "active-tab" : ""}`}
          onClick={() => handleTabChange("top-left")}
        >
          <p>Burada istədiyiniz məzmunu yerləşdirə bilərsiniz.</p>
          <button onClick={requestIframeData}>Fetch Data from Iframe</button>
        </div>

        {/* Sağ tərəf */}
        <div
          className={`top-right ${currentTab === "top-right" ? "active-tab" : ""}`}
        >
          <iframe
            onClick={() => handleIframeClick("top-right")}
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Iframe"
            className="iframe-content"
          ></iframe>
        </div>
      </div>

      {/* Aşağı hissə */}
      <div
        className={`bottom-section ${
          currentTab === "bottom-section" ? "active-tab" : ""
        }`}
      >
        <iframe
          onClick={() => handleIframeClick("bottom-section")}
          src="https://acfsimulation.com"
          title="Bottom Iframe"
          className="iframe-content"
        ></iframe>
      </div>
    </div>
  );
}

import { useEffect } from "react";

export function ChatwootWidget() {
  useEffect(() => {
    // Chatwoot Settings
    (window as any).chatwootSettings = {
      hideMessageBubble: false,
      position: "right", // This can be left or right
      locale: "en", // Language to be set
      type: "standard", // [standard, expanded_bubble]
    };

    // Paste the script from Chatwoot inbox settings here
    // For now, this is a placeholder - user needs to add their Chatwoot account details
    const script = document.createElement("script");
    script.src = "https://app.chatwoot.com/packs/js/sdk.js";
    script.defer = true;
    script.async = true;
    
    script.onload = () => {
      // Initialize Chatwoot after script loads
      // User needs to replace 'ACCOUNT_ID' with their actual Chatwoot account ID
      if ((window as any).chatwootSDK) {
        (window as any).chatwootSDK.run({
          websiteToken: "CHATWOOT_WEBSITE_TOKEN",
          baseUrl: "https://app.chatwoot.com",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}

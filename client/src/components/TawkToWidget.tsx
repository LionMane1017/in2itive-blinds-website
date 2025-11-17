import { useEffect } from "react";

export function TawkToWidget() {
  useEffect(() => {
    // Tawk.to live chat widget with proper initialization
    // Using Tawk.to's recommended embed code
    
    // @ts-ignore
    window.Tawk_API = window.Tawk_API || {};
    // @ts-ignore
    window.Tawk_LoadStart = new Date();
    
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/5f7e4c4ef0e7167d00112d6e/default";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    return () => {
      // Cleanup: remove the script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Remove Tawk.to widget
      // @ts-ignore
      if (window.Tawk_API && window.Tawk_API.hideWidget) {
        // @ts-ignore
        window.Tawk_API.hideWidget();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}

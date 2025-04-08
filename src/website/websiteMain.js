import { useEffect, useRef, useState } from "react";



function HomeWebApp() {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const downloadRef = useRef(null); // Reference for the download link

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/.test(userAgent);
    const isFacebook = /FBAN|FBAV/.test(userAgent);

    setCurrentUrl(window.location.href);

    if (isInstagram || isFacebook) {
      setIsInAppBrowser(true);

      // Automatically trigger file download before redirecting
      setTimeout(() => {
        const downloadLink = document.createElement("a");
        downloadLink.href = window.location.href;
        downloadLink.setAttribute("download", "Edusify.html"); // Set actual filename
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }, 500);

      // Redirect user to the default browser after a delay
      setTimeout(() => {
        window.location.replace(window.location.href);
      }, 1500);
    }
  }, []);

  if (isInAppBrowser) {
    return (
        <div className="App">
        <h1>Hello</h1>
            </div>
    );
  }

  return (
    <div className="App">
<h1>Hello</h1>
    </div>
  );
}

export default HomeWebApp;

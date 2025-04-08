import { useEffect, useRef, useState } from "react";
import './Hero.css';
import Hero from './Hero';
import Header from './Header';
import HowItWorks from './HowItWorks';
import ComparisonSection from './ComparisonSection';
import CTASection from './CTASection';

const Website = () => {
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
    <section>
        <Header/>
        <Hero/>
        <HowItWorks/>
        <ComparisonSection/>
        <CTASection/>
    </section>
  );
}
return (
    <section >

      <Header/>
        <Hero/>
        <HowItWorks/>
        <ComparisonSection/>
        <CTASection/>

    </section>
  );
};

export default Website;


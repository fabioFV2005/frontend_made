import React, { useState, useRef, useEffect } from "react";
import HomeHero from "../shared/components/Home/HomeHero";
import Hero2 from "../shared/components/Home/FondoAnimado";
import StickyButton from "../shared/components/custom/StickyButton";
import Luna from "../shared/components/Home/Luna";
import ProcesoHome from "../shared/components/Home/ProcesoHome";
import NosotrosHome from "../shared/components/Home/NosotrosHome";
import BlueVideo from "../shared/components/custom/BlueVideo";

function Home() {
  const [showButton, setShowButton] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting);
      },
      {
        threshold: 0.7,
        rootMargin: "0px",
      },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div ref={heroRef}>
        <HomeHero />
      </div>
      <ProcesoHome />
      <Hero2 />
      <BlueVideo />
      <NosotrosHome />
      <Luna />
      <StickyButton isVisible={showButton} />
    </div>
  );
}

export default Home;

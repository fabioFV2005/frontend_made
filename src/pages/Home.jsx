import React, { useState, useRef, useEffect } from 'react'
import HomeHero from '../shared/components/Home/HomeHero'
import Hero2 from '../shared/components/Home/Hero2'
import TeamHome from '../shared/components/Home/TeamHome'
import StickyButton from '../shared/components/custom/StickyButton'

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
        rootMargin: "0px" 
      }
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
      <Hero2 />      
      <StickyButton isVisible={showButton} />
      
      <TeamHome />
    </div>
  )
}

export default Home
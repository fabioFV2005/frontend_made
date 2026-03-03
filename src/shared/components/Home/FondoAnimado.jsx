import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import patronSVG from "../../../assets/svg/patron-made.svg";
import video1 from "../../../assets/hero/building2.mp4";
import video2 from "../../../assets/hero/building.mp4";
import video3 from "../../../assets/hero/building.mp4";

const MADE = () => {
  const [clip, setClip] = useState("clip1");
  const path1 =
    "M904.8,186.9v383c-.03,18.99-6.16,37.47-17.5,52.7l-195.5,262.1c-10.47,14.05-26.97,22.32-44.5,22.3h-127.4c-7.23.03-13.13-5.8-13.16-13.04-.01-2.18.53-4.34,1.56-6.26L879.9,180.8c2.27-4.36,6.78-7.1,11.7-7.1h0c7.29,0,13.2,5.91,13.2,13.2Z";
  const path2 =
    "M938,186.3v398.9c-.06,6.9,5.5,12.54,12.4,12.6h214.8c6.96,0,12.61-5.62,12.62-12.58,0-2.1-.52-4.17-1.52-6.02l-214.8-398.8c-2.18-4.11-6.45-6.69-11.1-6.7h0c-6.96,0-12.6,5.64-12.6,12.6Z";
  const path3 =
    "M950.7,632.1h241.1c4.64-.04,8.93,2.45,11.2,6.5l136.6,250.5c4.4,8.1-1.7,17.9-11.3,17.9h-150.1c-3.65.03-7.15-1.49-9.6-4.2l-227.4-250.4c-7.2-7.9-1.4-20.3,9.5-20.3Z";

  const videos = {
    clip1: video1,
    clip2: video2,
    clip3: video3,
  };
  // Posicion de videos
  const videoPosition = {
    clip1: {
      x: "-40%",
      y: "2%", 
    },
    clip2: {
      x: "-19%", 
      y: "-16%", 
    },
    clip3: {
      x: "-35%",
      y: "-35%",
    },
  };

  // Escala para videos
  const videoScale = {
    clip1: 0.8,
    clip2: 0.6, 
    clip3: 0.6,
  };

  useEffect(() => {
    const ids = ["clip1", "clip2", "clip3"];
    let i = 0;

    const interval = setInterval(() => {
      i = (i + 1) % ids.length;
      setClip(ids[i]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Fondo opcional*/}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${patronSVG})` }}
      />

      <svg
        viewBox="10 0 1920 1080"
        className="absolute left-1/2 top-1/2 
            w-[200%] 
            sm:w-[150%] 
            md:w-[110%]
            -translate-x-1/2 -translate-y-1/2"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(50,0)">
          <defs>
            <clipPath id="clip1">
              <path d={path1}></path>
            </clipPath>

            <clipPath id="clip2">
              <path d={path2} />
            </clipPath>

            <clipPath id="clip3">
              <path d={path3} />
            </clipPath>
          </defs>

          {/* Figuras del logo */}
          <motion.path
            d={path1}
            fill="#868485"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.path
            d={path2}
            fill="#f1550a"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.path
            d={path3}
            fill="#868485"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* Video */}
          <AnimatePresence mode="wait">
            <motion.foreignObject
              key={clip}
              x="500"
              y="0"
              width="1920"
              height="1080"
              clipPath={`url(#${clip})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ 
                position: "relative", 
                width: "100%", 
                height: "100%",
                overflow: "hidden"
              }}>
                {/* Contenedor del video con transform */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transform: `translate(${videoPosition[clip].x}, ${videoPosition[clip].y}) scale(${videoScale[clip]})`,
                    transformOrigin: "center center",
                    willChange: "transform",
                  }}
                >
                  <video
                    src={videos[clip]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Capa naranja para clip2 */}
                {clip === "clip2" && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#f1550a",
                      opacity: 0.25,
                      mixBlendMode: "overlay", // Tambien podriamos usar "multiply", "screen", "soft-light"
                      pointerEvents: "none",
                      zIndex: 10,
                    }}
                  />
                )}
              </div>
            </motion.foreignObject>
          </AnimatePresence>
        </g>
      </svg>
    </section>
  );
};

export default MADE;
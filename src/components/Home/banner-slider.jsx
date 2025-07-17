"use client";
import { useState, useEffect } from "react";
const bannnerImage = "/banner/banner_Image.webp";
const bannerImageRes = "/banner/banner_image_res.webp";

/**
 * BannerSlider Component
 *
 * A responsive, auto-advancing image slider with navigation controls
 * and call-to-action buttons.
 */
export function BannerSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value on client-side
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-auto md:h-screen w-full">
      <div className="relative w-full h-full">
        <img
          src={isMobile ? bannerImageRes : bannnerImage || "/placeholder.svg"}
          alt="GLA University Banner"
          className="w-full h-auto md:h-full object-cover"
        />
      </div>
    </div>
  );
}

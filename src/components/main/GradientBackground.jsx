const BackgroundWave = "/general/background-wave.svg";

export function GradientBackground({
  className = "gradientOne",
  svgOpacity = 1,
  svgPosition = "top-1/6",
  children,
  round,
}) {
  return (
    <div className={`relative overflow-hidden ${className} ${round}`}>
      {/* SVG Background */}
      <div className="absolute inset-0 z-[1]">
        <img
          src={BackgroundWave}
          alt=""
          className={`absolute ${svgPosition} left-0 w-full h-full object-cover`}
          style={{
            opacity: svgOpacity,
          }}
        />
      </div>
      {/* Content */}
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}

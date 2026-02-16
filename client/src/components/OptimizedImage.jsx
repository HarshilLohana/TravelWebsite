import React from "react";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false, // true only for hero or above-the-fold images
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchpriority={priority ? "high" : "auto"}
      className={className}
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
    />
  );
};

export default OptimizedImage;

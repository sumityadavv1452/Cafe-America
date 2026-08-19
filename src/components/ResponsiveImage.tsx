interface ResponsiveImageProps {
  baseName: "hero-mezze" | "hookah-lounge" | "kabob-platter";
  alt: string;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

export default function ResponsiveImage({
  baseName,
  alt,
  className = "",
  sizes = "100vw",
  loading = "lazy",
  priority = false,
}: ResponsiveImageProps) {
  const avifSrcSet = `/images/${baseName}-sm.avif 640w, /images/${baseName}-md.avif 1024w, /images/${baseName}-lg.avif 1920w`;
  const webpSrcSet = `/images/${baseName}-sm.webp 640w, /images/${baseName}-md.webp 1024w, /images/${baseName}-lg.webp 1920w`;
  const defaultPng = `/images/${baseName}.png`;

  return (
    <picture className={`block w-full h-full ${className}`}>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={defaultPng}
        alt={alt}
        className="w-full h-full object-cover"
        loading={priority ? "eager" : loading}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}

import React from 'react';

export interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  isThumb?: boolean;
  aspectRatio?: string;
  wrapperClassName?: string;
}

/**
 * Helper to compute WebP and JPG fallback URLs.
 * Automatically inserts `_thumb` for thumbnail images if `isThumb` is true.
 */
export const getOptimizedImageUrls = (srcUrl: string, isThumb: boolean = false) => {
  if (!srcUrl) return { webpUrl: '', jpgUrl: '' };

  let webpUrl = srcUrl;

  // Convert extension to .webp if it's png/jpeg/jpg
  if (/\.(png|jpg|jpeg)$/i.test(webpUrl)) {
    webpUrl = webpUrl.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  }

  // Handle thumbnail suffix
  if (isThumb && !webpUrl.includes('_thumb.webp')) {
    webpUrl = webpUrl.replace(/\.webp$/, '_thumb.webp');
  }

  // Fallback JPG URL
  const jpgUrl = webpUrl.replace(/\.webp$/, '.jpg');

  return { webpUrl, jpgUrl };
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  isThumb = false,
  className = '',
  wrapperClassName = '',
  width,
  height,
  loading = 'lazy',
  aspectRatio,
  style,
  ...props
}) => {
  if (!src) return null;

  const { webpUrl, jpgUrl } = getOptimizedImageUrls(src, isThumb);

  const combinedStyle: React.CSSProperties = {
    ...(aspectRatio ? { aspectRatio } : {}),
    ...style,
  };

  return (
    <picture className={`block overflow-hidden ${wrapperClassName}`}>
      <source srcSet={webpUrl} type="image/webp" />
      <img
        src={jpgUrl}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        style={combinedStyle}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;

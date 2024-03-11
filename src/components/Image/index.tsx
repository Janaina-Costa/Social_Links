import { ImgHTMLAttributes } from 'react';

export default function Image({
  src,
  alt,
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <figure>
      <img src={src} alt={alt} className="w-48 " />
    </figure>
  );
}

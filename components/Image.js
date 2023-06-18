import React from "react";
import NextImage from "next/image";

export default function Image({
  classNameRoot = "",
  classNameImage = "",
  src,
  alt = "",
}) {
  return (
    <div className={`${classNameRoot} relative`}>
      <NextImage fill className={classNameImage} src={src} alt={alt} />
    </div>
  );
}

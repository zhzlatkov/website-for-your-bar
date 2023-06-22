import React from "react";
import NextImage from "next/image";

export default function Image({
  withContainer = true,
  classNameRoot = "",
  classNameImage = "",
  src,
  alt = "",
}) {
  return withContainer ? (
    <div className={`${classNameRoot} relative`}>
      <NextImage fill className={classNameImage} src={src} alt={alt} />
    </div>
  ) : (
    <NextImage fill className={classNameImage} src={src} alt={alt} />
  );
}

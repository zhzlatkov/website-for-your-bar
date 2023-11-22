import React from "react";
import NextImage from "next/image";

export default function Image({
  withContainer = true,
  classNameRoot = "",
  classNameImage = "",
  fill = true,
  priority = false,
  src,
  alt = "",
  ...props
}) {
  return withContainer ? (
    <div className={`${classNameRoot} relative`}>
      <NextImage
        fill={fill}
        priority={priority}
        placeholder="empty"
        quality={75}
        className={classNameImage}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  ) : (
    <NextImage
      fill={fill}
      priority={priority}
      placeholder="empty"
      quality={75}
      className={classNameImage}
      src={src}
      alt={alt}
      {...props}
    />
  );
}

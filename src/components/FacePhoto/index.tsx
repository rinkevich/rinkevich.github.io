"use client";
import FaceImage from "./media/photo_bw_small_variant1.png";
import Image from "next/image";
import clsx from "clsx";

type FacePhotoProps = {
  className: string;
};

export default function FacePhoto(props: FacePhotoProps) {
  return (
    <Image
      src={FaceImage}
      alt="Andrejs Rinkevičs"
      className={clsx("h-40 w-40 rounded-2xl bg-black", props.className)}
      width={160}
      height={160}
      placeholder="blur"
      blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAgAAkA4JaQADrAC354l1AAA4n+TzI969wctzjitVTydR//3F6HHKZ7/Yn5LlaUvVjbIezS8bEe4niTVoAAA"
    />
  );
}

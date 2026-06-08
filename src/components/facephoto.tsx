import Image from "next/image"

import { cn } from "@/lib/utils"

import FaceImage from "./media/photo_bw_small_variant1.png"

export default function FacePhoto({ className }: { className?: string }) {
  return (
    <Image
      src={FaceImage}
      alt="Andrejs Rinkevičs"
      width={160}
      height={160}
      placeholder="blur"
      blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAgAAkA4JaQADrAC354l1AAA4n+TzI969wctzjitVTydR//3F6HHKZ7/Yn5LlaUvVjbIezS8bEe4niTVoAAA"
      className={cn("size-full object-cover", className)}
    />
  )
}

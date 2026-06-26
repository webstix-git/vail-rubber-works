import type { StaticImageData } from "next/image";

export function imgSrc(image: string | StaticImageData): string {
  return typeof image === "string" ? image : image.src;
}

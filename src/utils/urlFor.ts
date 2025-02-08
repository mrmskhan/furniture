// utils/urlFor.ts

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) {
    console.error("Invalid image source:", source);
    return "";
  }
  return builder.image(source).url();
}

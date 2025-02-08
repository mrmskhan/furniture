export const singleProductQuery = `*[_type == "products" && slug.current == $slug][0] {
  title,
  price,
  description,
  "imageUrl": image.asset->url, // Fetch image URL directly
  slug
}`;
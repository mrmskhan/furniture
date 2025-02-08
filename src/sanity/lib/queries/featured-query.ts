// lib/queries/featured-query.js

export const featuredQuery = `*[_type == "products" && "featured" in tags] {
    _id,
    title,
    price,
    priceWithoutDiscount,
    "imageUrl": image.asset->url,  // Ensure we fetch the correct image URL
    description
  }`;
  
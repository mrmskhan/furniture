// lib/queries/featuredProducts-query.js

export const featuredProductsQuery = `*[_type == "products" && "featuredProducts" in tags] {
    _id,
    title,
    price,
    priceWithoutDiscount,
    "imageUrl": image.asset->url,  // Ensure we fetch the correct image URL
    description
  }`;
  
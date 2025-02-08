// lib/queries/featured-query.js

export const ourProductsQuery = `*[_type == "products" && "ourProducts" in tags] {
    _id,
    title,
    price,
    priceWithoutDiscount,
    "imageUrl": image.asset->url,  // Ensure we fetch the correct image URL
    description
  }`;
  
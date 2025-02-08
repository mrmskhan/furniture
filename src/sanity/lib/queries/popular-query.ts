// GROQ query to fetch products with the 'popular' tag
const popularProductsQuery = `*[_type == "products" && "popular" in tags] {
    title,
    price,
    priceWithoutDiscount,
    badge,
    image {
      asset -> {
        url
      }
    },
    category -> {
      title
    },
    description,
    inventory,
    tags
  }`;
  
  export default popularProductsQuery;
  
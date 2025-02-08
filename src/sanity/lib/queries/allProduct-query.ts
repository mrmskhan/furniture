
export const allProducts1Query = `*[_type == "products"] { 
    title, 
    price, 
    "oldPrice": priceWithoutDiscount, 
    "imageUrl": image.asset->url ,
    slug
  }`;
  
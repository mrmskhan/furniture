export const instagramQuery = `*[_type == "products" && "instagram" in tags]{
  _id,
  title,
  price,
  "imageUrl": image.asset->url,  
  description
}`;

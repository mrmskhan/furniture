const topCategoriesQuery = `*[_type == "categories"]{
    title,
    image{
      asset->{
        _id,
        url
      }
    },
    products
  }`;
  
  export default topCategoriesQuery;
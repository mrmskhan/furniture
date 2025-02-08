import { useEffect, useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { client } from "../sanity/lib/client";
import { featuredQuery } from "../sanity/lib/queries/featured-query";

// Define a type for a product
type Product = {
  title: string;
  price: string;
  oldPrice: string;
  image: string;
};

// Define types for the props of ProductBox component
type ProductBoxProps = {
  product: Product;
};

// Define the ProductBox component
const ProductBox = ({ product }: ProductBoxProps) => (
  <div>
    <div className="group shadow-md bg-neutral-100 w-[260px] h-[260px] flex justify-center items-center relative cursor-pointer ">
      <Image src={product.image} width={260} height={100} alt={product.title} />
      <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        Add to Cart
      </button>
    </div>
    <h1 className="font-bold font-sans pt-4">{product.title}</h1>
    <div className="flex items-center gap-20 space-x-2 mb-10">
      <span className="text-gray-800 font-bold">{product.price}</span>
      {product.oldPrice && (
        <span className="text-gray-400 font-bold line-through">
          {product.oldPrice}
        </span>
      )}
      <CiShoppingCart className="text-gray-800 w-[22px] h-[22px] pl4 hover:bg-green-600" />
    </div>
  </div>
);

// Define the Products component
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch featured products from Sanity
    const fetchFeaturedProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(featuredQuery);
        console.log("Fetched Featured Products: ", fetchedProducts);

        // Map the fetched data to match the Product type
        const formattedProducts = fetchedProducts.map((product: any) => ({
          title: product.title,
          price: `$${product.price}`,
          oldPrice: product.priceWithoutDiscount
            ? `$${product.priceWithoutDiscount}`
            : "",
          image: product.imageUrl || "/default-image.png",
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <main>
      <div className="w-full flex justify-center items-center mt-16 mb-1">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <div>
              <h1 className="w-full text-gray-800 font-bold text-center sm:text-md md:text-3xl lg:text-3xl pt-4 pb-10">
                Featured Products
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mt-5 gap-y-5">
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductBox key={index} product={product} />
              ))
            ) : (
              <div>Loading Featured Products...</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;

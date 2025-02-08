import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { client } from "../sanity/lib/client";
import { ourProductsQuery } from "../sanity/lib/queries/ourProducts-query";
import { useEffect, useState } from "react";

// Define a type for a product
type Product = {
  _id: string;
  title: string;
  price: string;
  priceWithoutDiscount: string;
  imageUrl: string;
  description: string;
};

// Define the ProductBox component
type ProductBoxProps = {
  product: Product;
};

const ProductBox = ({ product }: ProductBoxProps) => (
  <div className="flex flex-col items-center">
    <div className="group shadow-md bg-neutral-100 w-[260px] h-[260px] flex justify-center items-center relative cursor-pointer">
      <Image
        src={product.imageUrl}
        width={260}
        height={260}
        alt={product.title}
      />
      <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        Add to Cart
      </button>
    </div>
    <h1 className="font-bold font-sans pt-4">{product.title}</h1>
    <div className="flex items-center gap-4 mb-10">
      <span className="text-gray-800 font-bold">${product.price}</span>
      {product.priceWithoutDiscount && (
        <span className="text-gray-400 font-bold line-through">
          ${product.priceWithoutDiscount}
        </span>
      )}
      <CiShoppingCart className="text-gray-800 w-[22px] h-[22px] pl-2 hover:bg-green-600 cursor-pointer" />
    </div>
  </div>
);

// Define the Products component
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(ourProductsQuery);
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center mt-16">
        <h1 className="text-gray-800 font-bold sm:text-md md:text-2xl lg:text-2xl">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <main>
      <div className="w-full flex justify-center items-center mt-16 mb-1 pb-20">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <h1 className="text-center text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4 pb-10">
              Our Products
            </h1>
          </div>
          <div className="flex flex-wrap justify-between mt-5 gap-y-5">
            {products.map((product) => (
              <ProductBox key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
